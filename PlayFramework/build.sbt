name := """PruebaTec"""
organization := "com.example"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.13.14"


libraryDependencies ++= Seq(
  jdbc,
  guice,
  "org.postgresql" % "postgresql" % "42.2.23",
  "org.playframework.anorm" %% "anorm" % "2.6.7"
)