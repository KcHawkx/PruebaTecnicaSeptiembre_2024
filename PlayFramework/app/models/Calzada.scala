package models

import anorm._
import play.api.libs.json._
import play.api.libs.functional.syntax._

case class Calzada(id: Option[Long], segmento_id: Int, longitud: Int, descripcion: String)

object Calzada {
  implicit val calzadaFormat: OFormat[Calzada] = Json.format[Calzada]
}
