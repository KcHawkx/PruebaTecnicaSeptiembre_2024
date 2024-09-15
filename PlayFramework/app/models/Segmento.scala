package models

import anorm._
import play.api.libs.json._
import play.api.libs.functional.syntax._

case class Segmento(id: Option[Long], numero: Int, longitud: Int, nomenclatura: String)

object Segmento {
  implicit val segmentoFormat: OFormat[Segmento] = Json.format[Segmento]
}