import React, { useEffect, useState } from "react";
import * as CardStyles from "../../UI/Card";
import { Container } from "react-bootstrap";
import * as productServices from "../../services/getService";
import Slider from "./Slider";
export default function HaliList() {
  const [productList, setProductList] = useState({});
  useEffect(() => {
    const something = async () => {
      try {
        const products = await productServices.getProductsFromDB();
        return await setProductList(products);
      } catch (error) {
        return console.log(error);
      }
    };
    something();
  }, []);

  return (
    <Container>
      <CardStyles.CardContainer className="row">
        {Object.values(productList).map((item, index) => (
          <CardStyles.Card key={index} className="card col-3">
                   <div class="card-photo">
        {item.photos.length > 0 ? (
          <Slider photos={item.photos} />
        ) : (
          <img
            className="images mb-2"
            alt="no photos"
            src="https://orbis-alliance.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
          />
        )}</div>
            {/* <CardStyles.ItemImg
              className="card-img-top"
              src={item.photos}
              alt="Card images cap"
            /> */}
            <CardStyles.CardBody className="card-body">
              <CardStyles.CardTitle className="card-title">
                {item.marka} / {item.title}
              </CardStyles.CardTitle>
              <CardStyles.CardText className="card-text">
                {item.info}
              </CardStyles.CardText>
              <CardStyles.CardText className="card-text">
                <strong> YOLLUKLAR : </strong>
                <p>
                  {item.eightyTo150} - {item.eightyTo300} - {item.hundertTo200}
                  - {item.hundertTo300}
                </p>
                <strong>HALILAR :</strong>
                <p>
                  {item.smallCarpet} - {item.fourMeter} - {item.sixMeter}
                </p>
              </CardStyles.CardText>
            </CardStyles.CardBody>
            <CardStyles.CardFooter className="card-footer">
              <strong>RENK : </strong>{item.color}
            </CardStyles.CardFooter>
          </CardStyles.Card>
        ))}
        <CardStyles.Card className="card col-3">
          <CardStyles.ItemImg
            className="card-img-top"
            src="https://cdn.dsmcdn.com//ty50/product/media/images/20210111/21/51155953/82603520/1/1_org.jpg"
            alt="Card images cap"
          />
          <CardStyles.CardBody className="card-body">
            <CardStyles.CardTitle className="card-title">
              Sarar Gri Kaymaz Taban Y??kanabilir Kesme Yolluk
            </CardStyles.CardTitle>
            <CardStyles.CardText className="card-text">
              M??KEMMEL DESEN VE RENK KAL??TES??NDE Y??ZEY?? KAL??TEL?? DOKUMA PELU??
              KUMA?? OLUP YUMU??ACIKTIR NOKTALAMA Y??NTEM?? ??LE ??RET??LEN KAYMAZ
              TABANLI HALIDIR PVC TABAN BATTAN??YE DOKUMASI ??LE 30 DERECEDE
              ??AMA??IR MAK??NES??NDE YIKANAB??L??R... FAYANS ve LAM??NANT ZEM??NLERDE
              KAYMAZ D??K??LMEZ KOKU YAPMAZ 8 MM HAV Y??KSEKL??????NDED??R LEKE TUTMAZ
              T??YLENME YAPMAZ KOLAY TEM??ZLEN??R DEFORME OLMAZ %100 SARAR HALI
              ??R??N??D??R. ??AMA??IR MAK??NES??NDE YIKANAB??L??R TOZLANMA ve YAPI??MA
              YAPMAZ 4 MEVS??M RAHATLIKLA KULLANILIR SICAK TUTAR DOKUSU VE
              ZERAFET?? ??LE ??ZER??NDE Y??R??MEK GER??EK B??R KEY??F YA??ATIR
            </CardStyles.CardText>
          </CardStyles.CardBody>
          <CardStyles.CardFooter className="card-footer">
            ??ne ????kan Bilgiler Materyal : Polyester Renk : Gri Tema/Desen :
            Modern Taban : Dot
          </CardStyles.CardFooter>
        </CardStyles.Card>{" "}
        <CardStyles.Card className="card col-3">
          <CardStyles.ItemImg
            className="card-img-top"
            src="https://cdn.dsmcdn.com//ty140/product/media/images/20210630/0/105666853/195341877/0/0_org.jpg"
            alt="Card images cap"
          />
          <CardStyles.CardBody className="card-body">
            <CardStyles.CardTitle className="card-title">
              Sarar Gri Kaymaz Taban Y??kanabilir Kesme Yolluk
            </CardStyles.CardTitle>
            <CardStyles.CardText className="card-text">
              M??KEMMEL DESEN VE RENK KAL??TES??NDE Y??ZEY?? KAL??TEL?? DOKUMA PELU??
              KUMA?? OLUP YUMU??ACIKTIR NOKTALAMA Y??NTEM?? ??LE ??RET??LEN KAYMAZ
              TABANLI HALIDIR PVC TABAN BATTAN??YE DOKUMASI ??LE 30 DERECEDE
              ??AMA??IR MAK??NES??NDE YIKANAB??L??R... FAYANS ve LAM??NANT ZEM??NLERDE
              KAYMAZ D??K??LMEZ KOKU YAPMAZ 8 MM HAV Y??KSEKL??????NDED??R LEKE TUTMAZ
              T??YLENME YAPMAZ KOLAY TEM??ZLEN??R DEFORME OLMAZ %100 SARAR HALI
              ??R??N??D??R. ??AMA??IR MAK??NES??NDE YIKANAB??L??R TOZLANMA ve YAPI??MA
              YAPMAZ 4 MEVS??M RAHATLIKLA KULLANILIR SICAK TUTAR DOKUSU VE
              ZERAFET?? ??LE ??ZER??NDE Y??R??MEK GER??EK B??R KEY??F YA??ATIR
            </CardStyles.CardText>
          </CardStyles.CardBody>
          <CardStyles.CardFooter className="card-footer">
            ??ne ????kan Bilgiler Materyal : Polyester Renk : Gri Tema/Desen :
            Modern Taban : Dot
          </CardStyles.CardFooter>
        </CardStyles.Card>{" "}
        <CardStyles.Card className="card col-3">
          <CardStyles.ItemImg
            className="card-img-top"
            src="https://cdn.dsmcdn.com//ty105/product/media/images/20210425/5/82714983/167228017/0/0_org.jpg"
            alt="Card images cap"
          />
          <CardStyles.CardBody className="card-body">
            <CardStyles.CardTitle className="card-title">
              Sarar Gri Kaymaz Taban Y??kanabilir Kesme Yolluk
            </CardStyles.CardTitle>
            <CardStyles.CardText className="card-text">
              M??KEMMEL DESEN VE RENK KAL??TES??NDE Y??ZEY?? KAL??TEL?? DOKUMA PELU??
              KUMA?? OLUP YUMU??ACIKTIR NOKTALAMA Y??NTEM?? ??LE ??RET??LEN KAYMAZ
              TABANLI HALIDIR PVC TABAN BATTAN??YE DOKUMASI ??LE 30 DERECEDE
              ??AMA??IR MAK??NES??NDE YIKANAB??L??R... FAYANS ve LAM??NANT ZEM??NLERDE
              KAYMAZ D??K??LMEZ KOKU YAPMAZ 8 MM HAV Y??KSEKL??????NDED??R LEKE TUTMAZ
              T??YLENME YAPMAZ KOLAY TEM??ZLEN??R DEFORME OLMAZ %100 SARAR HALI
              ??R??N??D??R. ??AMA??IR MAK??NES??NDE YIKANAB??L??R TOZLANMA ve YAPI??MA
              YAPMAZ 4 MEVS??M RAHATLIKLA KULLANILIR SICAK TUTAR DOKUSU VE
              ZERAFET?? ??LE ??ZER??NDE Y??R??MEK GER??EK B??R KEY??F YA??ATIR
            </CardStyles.CardText>
          </CardStyles.CardBody>
          <CardStyles.CardFooter className="card-footer">
            ??ne ????kan Bilgiler Materyal : Polyester Renk : Gri Tema/Desen :
            Modern Taban : Dot
          </CardStyles.CardFooter>
        </CardStyles.Card>
      </CardStyles.CardContainer>
    </Container>
  );
}
