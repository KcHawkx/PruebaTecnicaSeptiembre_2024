package models

import anorm._
import play.api.libs.json._
import play.api.libs.functional.syntax._

case class Bordillo(id: Option[Long], segmento_id: Int, longitud: Int, descripcion: String)

object Bordillo {
  implicit val bordilloFormat: OFormat[Bordillo] = Json.format[Bordillo]
}
