package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._
import daos.CalzadaDAO
import models.Calzada
import scala.concurrent.{ExecutionContext, Future}

@Singleton
class CalzadaController @Inject()(cc: ControllerComponents, calzadaDAO: CalzadaDAO)(implicit ec: ExecutionContext) extends AbstractController(cc) {

  def prueba1 = Action {
    Ok("Endpoint realizado")
  }

  def prueba2 = Action {
    val jsonResponse = Json.obj(
      "Estado" -> "OK",
      "Tiempo" -> System.currentTimeMillis()
    )
    Ok(jsonResponse)
  }


  // Obtener todas las calzadas
  def getAllCalzada = Action.async {
    Future {
      Ok(Json.toJson(calzadaDAO.findAll()))
    }
  }

  // Crear una nueva calzada
  def createCalzada = Action(parse.json).async { request =>
    request.body.validate[Calzada].map { calzada =>
      Future {
        calzadaDAO.create(calzada) match {
          case Some(id) => Created(Json.obj("id" -> id))
          case None => InternalServerError("Error al crear la Calzada")
        }
      }
    }.getOrElse(Future(BadRequest("Invalid data")))
  }

  // Actualizar una calzada existente
  def updateCalzada(id: Long) = Action(parse.json).async { request =>
    request.body.validate[Calzada].map { calzada =>
      Future {
        calzadaDAO.update(calzada.copy(id = Some(id))) match {
          case 1 => Ok("Calzada actualizada")
          case _ => InternalServerError("Error al actualizar la calzada")
        }
      }
    }.getOrElse(Future(BadRequest("Invalid data")))
  }

  // Eliminar una calzada por ID
  def deleteCalzada(id: Long) = Action.async {
    Future {
      calzadaDAO.delete(id) match {
        case 1 => Ok("Calzada eliminada")
        case _ => InternalServerError("Error al eliminar la calzada")
      }
    }
  }

}
