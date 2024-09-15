package daos

import anorm.SqlParser._
import anorm._
import javax.inject.{Inject, Singleton}
import play.api.db.Database
import models.Bordillo 

@Singleton
class BordilloDAO @Inject()(db: Database) {

  val bordilloParser: RowParser[Bordillo] = {
    get[Option[Long]]("id") ~
    get[Int]("segmento_id") ~
    get[Int]("longitud") ~
    get[String]("descripcion") map {
      case id ~ segmento_id ~ longitud ~ descripcion => Bordillo(id, segmento_id, longitud, descripcion)
    }
  }

  // Métodos CRUD
  def create(bordillo: Bordillo): Option[Long] = {
    db.withConnection { implicit connection =>
      SQL"""INSERT INTO bordillos(segmento_id, longitud, descripcion) VALUES (${bordillo.segmento_id}, ${bordillo.longitud}, ${bordillo.descripcion})"""
        .executeInsert()
    }
  }

  def findAll(): List[Bordillo] = {
    db.withConnection { implicit connection =>
      SQL"SELECT * FROM bordillos".as(bordilloParser.*)
    }
  }

  def update(bordillo: Bordillo): Int = {
    db.withConnection { implicit connection =>
      SQL"""
        UPDATE bordillos SET segmento_id = ${bordillo.segmento_id}, longitud = ${bordillo.longitud}, descripcion = ${bordillo.descripcion}
        WHERE id = ${bordillo.id.get}
      """.executeUpdate()
    }
  }

  def delete(id: Long): Int = {
    db.withConnection { implicit connection =>
      SQL"DELETE FROM bordillos WHERE id = $id".executeUpdate()
    }
  }
}
