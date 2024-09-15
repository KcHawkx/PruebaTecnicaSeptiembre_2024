package daos

import anorm.SqlParser._
import anorm._
import javax.inject.{Inject, Singleton}
import play.api.db.Database
import models.Person

@Singleton
class PersonDAO @Inject()(db: Database) {

  val personParser: RowParser[Person] = {
    get[Option[Long]]("id") ~
    get[String]("name") ~
    get[Int]("age") map {
      case id ~ name ~ age => Person(id, name, age)
    }
  }

  // Métodos CRUD
  def create(person: Person): Option[Long] = {
    db.withConnection { implicit connection =>
      SQL"""INSERT INTO person(name, age) VALUES (${person.name}, ${person.age})"""
        .executeInsert()
    }
  }

  def findAll(): List[Person] = {
    db.withConnection { implicit connection =>
      SQL"SELECT * FROM person".as(personParser.*)
    }
  }

  def update(person: Person): Int = {
    db.withConnection { implicit connection =>
      SQL"""
        UPDATE person SET name = ${person.name}, age = ${person.age}
        WHERE id = ${person.id.get}
      """.executeUpdate()
    }
  }

  def delete(id: Long): Int = {
    db.withConnection { implicit connection =>
      SQL"DELETE FROM person WHERE id = $id".executeUpdate()
    }
  }
}
