name := "pacemaker-service"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  javaJdbc,
  javaEbean,
  cache,
  "net.sf.flexjson" % "flexjson" % "3.1",
  /*"postgresql" % "postgresql" % "9.1-901-1.jdbc4",*/
  "com.typesafe.slick" %% "slick" % "1.0.0",
  "mysql" % "mysql-connector-java" % "5.1.21"
)     

play.Project.playJavaSettings
 