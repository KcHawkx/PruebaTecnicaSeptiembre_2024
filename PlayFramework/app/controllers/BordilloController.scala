package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._
import daos.BordilloDAO
import models.Bordillo
import scala.concurrent.{ExecutionContext, Future}

@Singleton
class BordilloController @Inject()(cc: ControllerComponents, bordilloDAO: BordilloDAO)(implicit ec: ExecutionContext) extends AbstractController(cc) {

  // Obtener todos los bordillos
  def getAllBordillo = Action.async {
    Future {
      Ok(Json.toJson(bordilloDAO.findAll()))
    }
  }

  // Crear un nuevo bordillo
  def createBordillo = Action(parse.json).async { request =>
    request.body.validate[Bordillo].map { bordillo =>
      Future {
        bordilloDAO.create(bordillo) match {
          case Some(id) => Created(Json.obj("id" -> id))
          case None => InternalServerError("Error al crear el Bordillo")
        }
      }
    }.getOrElse(Future(BadRequest("Invalid data")))
  }

  // Actualizar un bordillo existente
  def updateBordillo(id: Long) = Action(parse.json).async { request =>
    request.body.validate[Bordillo].map { bordillo =>
      Future {
        bordilloDAO.update(bordillo.copy(id = Some(id))) match {
          case 1 => Ok("Bordillo actualizado")
          case _ => InternalServerError("Error al actualizar el bordillo")
        }
      }
    }.getOrElse(Future(BadRequest("Invalid data")))
  }

  // Eliminar un bordillo por ID
  def deleteBordillo(id: Long) = Action.async {
    Future {
      bordilloDAO.delete(id) match {
        case 1 => Ok("Bordillo eliminado")
        case _ => InternalServerError("Error al eliminar el bordillo")
      }
    }
  }

}
