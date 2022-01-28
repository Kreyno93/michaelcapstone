FROM openjdk:17

MAINTAINER Micha <michaelw.apple@icloud.com>

ADD backend/target/mtbitious.jar mtbitious.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$URI -jar /mtbitious.jar" ]