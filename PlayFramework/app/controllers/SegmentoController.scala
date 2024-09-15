package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._
import daos.SegmentoDAO
import models.Segmento
import scala.concurrent.{ExecutionContext, Future}

@Singleton
class SegmentoController @Inject()(cc: ControllerComponents, segmentoDAO: SegmentoDAO)(implicit ec: ExecutionContext) extends AbstractController(cc) {

  // Obtener todos los segmentos
  def getAllSegmento = Action.async {
    Future {
      Ok(Json.toJson(segmentoDAO.findAll()))
    }
  }

  // Crear un nuevo segmento
  def createSegmento = Action(parse.json).async { request =>
    request.body.validate[Segmento].map { segmento =>
      Future {
        segmentoDAO.create(segmento) match {
          case Some(id) => Created(Json.obj("id" -> id))
          case None => InternalServerError("Error al crear el Segmento")
        }
      }
    }.getOrElse(Future(BadRequest("Invalid data")))
  }

    // Actualizar un segmento existente
    def updateSegmento(id: Long) = Action(parse.json).async { request =>
      request.body.validate[Segmento].map { segmento =>
        Future {
          segmentoDAO.update(segmento.copy(id = Some(id))) match {
            case 1 => Ok("Segmento actualizado")
            case _ => InternalServerError("Error al actualizar el segmento")
          }
        }
      }.getOrElse(Future(BadRequest("Invalid data")))
    }

  // Eliminar un segmento por ID
  def deleteSegmento(id: Long) = Action.async {
    Future {
      segmentoDAO.delete(id) match {
        case 1 => Ok("Segmento eliminado")
        case _ => InternalServerError("Error al eliminar el segmento")
      }
    }
  }
  


}