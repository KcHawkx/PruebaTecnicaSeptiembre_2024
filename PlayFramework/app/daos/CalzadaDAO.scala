package daos

import anorm.SqlParser._
import anorm._
import javax.inject.{Inject, Singleton}
import play.api.db.Database
import models.Calzada 

@Singleton
class CalzadaDAO @Inject()(db: Database) {

  val calzadaParser: RowParser[Calzada] = {
    get[Option[Long]]("id") ~
    get[Int]("segmento_id") ~
    get[Int]("longitud") ~
    get[String]("descripcion")   map {
      case id ~ segmento_id ~ longitud  ~ descripcion => Calzada(id, segmento_id, longitud, descripcion)
    }
  }

  // Métodos CRUD
  def create(calzada: Calzada): Option[Long] = {
    db.withConnection { implicit connection =>
      SQL"""INSERT INTO calzadas(segmento_id, longitud, descripcion) VALUES (${calzada.segmento_id}, ${calzada.longitud} ,  ${calzada.descripcion})"""
        .executeInsert()
    }
  }

  def findAll(): List[Calzada] = {
    db.withConnection { implicit connection =>
      SQL"SELECT * FROM calzadas".as(calzadaParser.*)
    }
  }

  def update(calzada: Calzada): Int = {
    db.withConnection { implicit connection =>
      SQL"""
        UPDATE calzadas SET segmento_id = ${calzada.segmento_id} , longitud = ${calzada.longitud} , descripcion = ${calzada.descripcion}
        WHERE id = ${calzada.id.get}
      """.executeUpdate()
    }
  }
  
  def delete(id: Long): Int = {
    db.withConnection { implicit connection =>
      SQL"DELETE FROM calzadas WHERE id = $id".executeUpdate()
    }
  }
}
