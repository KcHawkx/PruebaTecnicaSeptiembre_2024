package daos

import anorm.SqlParser._
import anorm._
import javax.inject.{Inject, Singleton}
import play.api.db.Database
import models.Segmento 

@Singleton
class SegmentoDAO @Inject()(db: Database) {

  val segmentoParser: RowParser[Segmento] = {
    get[Option[Long]]("id") ~
    get[Int]("numero") ~
    get[Int]("longitud") ~
    get[String]("nomenclatura") map {
      case id ~ numero ~ longitud ~ nomenclatura => Segmento(id, numero, longitud, nomenclatura)
    }
  }

  // Métodos CRUD
  def create(segmento: Segmento): Option[Long] = {
    db.withConnection { implicit connection =>
      SQL"""INSERT INTO segmentos(numero, longitud, nomenclatura) VALUES (${segmento.numero}, ${segmento.longitud}, ${segmento.nomenclatura})"""
        .executeInsert()
    }
  }

  def findAll(): List[Segmento] = {
    db.withConnection { implicit connection =>
      SQL"SELECT * FROM segmentos".as(segmentoParser.*)
    }
  }

  def update(segmento: Segmento): Int = {
    db.withConnection { implicit connection =>
      SQL"""
        UPDATE segmentos SET numero = ${segmento.numero}, longitud = ${segmento.longitud}, nomenclatura = ${segmento.nomenclatura}
        WHERE id = ${segmento.id.get}
      """.executeUpdate()
    }
  }

  def delete(id: Long): Int = {
    db.withConnection { implicit connection =>
      SQL"DELETE FROM segmentos WHERE id = $id".executeUpdate()
    }
  }
}