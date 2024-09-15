import anorm._
import play.api.libs.json._
import play.api.libs.functional.syntax._

case class Person(id: Option[Long], name: String, age: Int)

object Person {
  implicit val personFormat: OFormat[Person] = Json.format[Person]
}

    