import React, { useEffect, useState } from "react";
import * as CardStyles from "../../UI/Card";
import { Container } from "react-bootstrap";
import * as productServices from "../../services/getService";
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
            <CardStyles.ItemImg
              className="card-img-top"
              src="https://cdn.dsmcdn.com//ty105/product/media/images/20210425/5/82714983/167228017/0/0_org.jpg"
              alt="Card images cap"
            />
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
              Sarar Gri Kaymaz Taban Yıkanabilir Kesme Yolluk
            </CardStyles.CardTitle>
            <CardStyles.CardText className="card-text">
              MÜKEMMEL DESEN VE RENK KALİTESİNDE YÜZEYİ KALİTELİ DOKUMA PELUŞ
              KUMAŞ OLUP YUMUŞACIKTIR NOKTALAMA YÖNTEMİ İLE ÜRETİLEN KAYMAZ
              TABANLI HALIDIR PVC TABAN BATTANİYE DOKUMASI İLE 30 DERECEDE
              ÇAMAŞIR MAKİNESİNDE YIKANABİLİR... FAYANS ve LAMİNANT ZEMİNLERDE
              KAYMAZ DÖKÜLMEZ KOKU YAPMAZ 8 MM HAV YÜKSEKLİĞİNDEDİR LEKE TUTMAZ
              TÜYLENME YAPMAZ KOLAY TEMİZLENİR DEFORME OLMAZ %100 SARAR HALI
              ÜRÜNÜDÜR. ÇAMAŞIR MAKİNESİNDE YIKANABİLİR TOZLANMA ve YAPIŞMA
              YAPMAZ 4 MEVSİM RAHATLIKLA KULLANILIR SICAK TUTAR DOKUSU VE
              ZERAFETİ İLE ÜZERİNDE YÜRÜMEK GERÇEK BİR KEYİF YAŞATIR
            </CardStyles.CardText>
          </CardStyles.CardBody>
          <CardStyles.CardFooter className="card-footer">
            Öne Çıkan Bilgiler Materyal : Polyester Renk : Gri Tema/Desen :
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
              Sarar Gri Kaymaz Taban Yıkanabilir Kesme Yolluk
            </CardStyles.CardTitle>
            <CardStyles.CardText className="card-text">
              MÜKEMMEL DESEN VE RENK KALİTESİNDE YÜZEYİ KALİTELİ DOKUMA PELUŞ
              KUMAŞ OLUP YUMUŞACIKTIR NOKTALAMA YÖNTEMİ İLE ÜRETİLEN KAYMAZ
              TABANLI HALIDIR PVC TABAN BATTANİYE DOKUMASI İLE 30 DERECEDE
              ÇAMAŞIR MAKİNESİNDE YIKANABİLİR... FAYANS ve LAMİNANT ZEMİNLERDE
              KAYMAZ DÖKÜLMEZ KOKU YAPMAZ 8 MM HAV YÜKSEKLİĞİNDEDİR LEKE TUTMAZ
              TÜYLENME YAPMAZ KOLAY TEMİZLENİR DEFORME OLMAZ %100 SARAR HALI
              ÜRÜNÜDÜR. ÇAMAŞIR MAKİNESİNDE YIKANABİLİR TOZLANMA ve YAPIŞMA
              YAPMAZ 4 MEVSİM RAHATLIKLA KULLANILIR SICAK TUTAR DOKUSU VE
              ZERAFETİ İLE ÜZERİNDE YÜRÜMEK GERÇEK BİR KEYİF YAŞATIR
            </CardStyles.CardText>
          </CardStyles.CardBody>
          <CardStyles.CardFooter className="card-footer">
            Öne Çıkan Bilgiler Materyal : Polyester Renk : Gri Tema/Desen :
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
              Sarar Gri Kaymaz Taban Yıkanabilir Kesme Yolluk
            </CardStyles.CardTitle>
            <CardStyles.CardText className="card-text">
              MÜKEMMEL DESEN VE RENK KALİTESİNDE YÜZEYİ KALİTELİ DOKUMA PELUŞ
              KUMAŞ OLUP YUMUŞACIKTIR NOKTALAMA YÖNTEMİ İLE ÜRETİLEN KAYMAZ
              TABANLI HALIDIR PVC TABAN BATTANİYE DOKUMASI İLE 30 DERECEDE
              ÇAMAŞIR MAKİNESİNDE YIKANABİLİR... FAYANS ve LAMİNANT ZEMİNLERDE
              KAYMAZ DÖKÜLMEZ KOKU YAPMAZ 8 MM HAV YÜKSEKLİĞİNDEDİR LEKE TUTMAZ
              TÜYLENME YAPMAZ KOLAY TEMİZLENİR DEFORME OLMAZ %100 SARAR HALI
              ÜRÜNÜDÜR. ÇAMAŞIR MAKİNESİNDE YIKANABİLİR TOZLANMA ve YAPIŞMA
              YAPMAZ 4 MEVSİM RAHATLIKLA KULLANILIR SICAK TUTAR DOKUSU VE
              ZERAFETİ İLE ÜZERİNDE YÜRÜMEK GERÇEK BİR KEYİF YAŞATIR
            </CardStyles.CardText>
          </CardStyles.CardBody>
          <CardStyles.CardFooter className="card-footer">
            Öne Çıkan Bilgiler Materyal : Polyester Renk : Gri Tema/Desen :
            Modern Taban : Dot
          </CardStyles.CardFooter>
        </CardStyles.Card>
      </CardStyles.CardContainer>
    </Container>
  );
}
