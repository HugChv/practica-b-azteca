--CREACION DE TABLA
CREATE TABLE CLIENTE(
ID_CLIENTE NUMBER PRIMARY KEY,
NOMBRE NVARCHAR2(30),
FECHA_NACIMIENTO DATE,
CELULAR NVARCHAR2(10),
CORREO NVARCHAR2(30)
);

CREATE SEQUENCE CLI_SQ;

CREATE OR REPLACE TRIGGER ON_INSERT_CLIENTE BEFORE
  INSERT ON CLIENTE FOR EACH ROW BEGIN
  SELECT CLI_SQ.NEXTVAL INTO :new.ID_CLIENTE FROM dual;
END;

INSERT ALL
INTO CLIENTE(NOMBRE,FECHA_NAC,CELULAR,CORREO)VALUES('GUSTAVO','16-09-1993','5503920992','gustavomx@gsalinas.com')
INTO CLIENTE(NOMBRE,FECHA_NAC,CELULAR,CORREO)VALUES('MARISOL','13-02-2001','5509382391','marimx@gsalinas.com')
INTO CLIENTE(NOMBRE,FECHA_NAC,CELULAR,CORREO)VALUES('ALBERTO','23-10-2021','5516498488','alberto@gsalinas.com')
SELECT * FROM DUAL;
UPDATE CLIENTE SET CORREO = 'newemail@bazteca.com' WHERE CLIENTE_ID = 3;

DELETE FROM CLIENTE WHERE CLIENTE_ID = 2;

SELECT * FROM CLIENTE;