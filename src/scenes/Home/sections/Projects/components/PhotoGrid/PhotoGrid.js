import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import './PhotoGrid.css';
import PhotoGridFilter from '../PhotoGridFilter/PhotoGridFilter';

const Shuffle = window.Shuffle;
const projects = [
  {
    id: 0,
    image: 'burnt',
    skills: 'NFT + ReactJS + Web3.js',
    groups: ['blockchain'],
    title: 'Verifeye',
    isVisit: true,
    imageCounts: 4,
    titleDetail: 'app.burnt.com',
    subtitle: 'Burnt Finance',
    url: 'https://app.burnt.com',
    description:
      'Decentralized Marketplace for your Collections'
  },
  {
    id: 1,
    image: 'onpinverifeye',
    skills: 'Laravel + Vue/Vuex',
    groups: ['javascript', 'php'],
    title: 'Verifeye',
    isVisit: true,
    imageCounts: 4,
    titleDetail: 'verifeye.info',
    subtitle: 'On-pin Verifeye',
    url: 'https://verifeye.info/',
    description:
      'On-Pin has been a golf course focused technology company for over 20 years. </br> •	Managing Facility/Course/Station/Assets , Members/Visitors , Geofence/Ad  </br> •	Established Real-time Golf Cart Tracking System using Rfid </br> •	Detail analyzed reports for Players/Rounds/Cart/Pace of Play/ Stations '
  },
  {
    id: 2,
    image: 'reserve',
    skills: 'Laravel + ReactJS + ReactNative',
    groups: ['javascript', 'php', 'mobile'],
    title: 'Reserve Restaurant',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'reserve-restaurant',
    subtitle: 'Reserve Restaurant',
    url: '',
    description:
      'Reserve | Deliver Apps & Website'
  },
  {
    id: 3,
    image: 'anytgo',
    skills: 'Laravel + ReactJS + ReactNative',
    groups: ['javascript', 'php', 'mobile'],
    title: 'AnytGo',
    isVisit: true,
    imageCounts: 2,
    titleDetail: 'anytgo',
    subtitle: 'AnytGo',
    url: '',
    description:
      'Client & Driver ordering Apps & Website'
  },
  {
    id: 4,
    image: 'ecib',
    skills: 'Laravel + VueJS',
    groups: ['javascript', 'php'],
    title: 'ECIB',
    isVisit: true,
    imageCounts: 2,
    titleDetail: 'ecibank.com',
    subtitle: 'ECI Bank - European Credit Investment Bank',
    url: 'https://www.ecibank.com',
    description:
      'ECI Bank is a fully regulated and licensed labuan investment bank approved by MOF and LFSA, we has been servicing since 2008.'
  },
  {
    id: 5,
    image: 'mystockprice',
    skills: 'Laravel + ReactJS',
    groups: ['javascript', 'php'],
    title: 'MyStockPrice',
    isVisit: true,
    imageCounts: 2,
    titleDetail: 'mystockprice.com',
    subtitle: 'MyStockPrice.com | Free Personal Stock Price Tracker',
    url: 'https://mystockprice.com',
    description:
      'With MyStockPrice, we can place a target price on a stock and track our favorite stocks for Free. MyStockPrice will save our time and help us avoid those precipitated and emotional decisions that naturally.'
  },
  {
    id: 6,
    image: 'guiadeportiva',
    skills: 'Wordpress',
    groups: ['php'],
    title: 'GuiaDeportiva',
    isVisit: true,
    imageCounts: 1,
    titleDetail: 'guiadeportiva.com.do',
    subtitle: 'GuiaDeportiva.com.do: - Pronósticos Deportivos Gratis',
    url: 'https://guiadeportiva.com.do',
    description:
      'Pronósticos Deportivos Gratis'
  },
  {
    id: 7,
    image: 'colombia',
    skills: 'React Native',
    groups: ['mobile'],
    title: 'Colombia',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'chancescolombia.com',
    subtitle: 'ChancesColombia.com | Resultados del Sinuano, Caribeña y más',
    url: 'https://play.google.com/store/apps/details?id=chances.colombia.mrl',
    description:
      'Chances Colombia App ofrece resultados y estadísticas de todos los sorteos chances de Colombia'
  },
  {
    id: 8,
    image: 'honduras',
    skills: 'React Native',
    groups: ['mobile'],
    title: 'Honduras',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'loteriasdehonduras.com',
    subtitle: 'Loto Honduras | Resultados de la Diaria',
    url: 'https://play.google.com/store/apps/details?id=com.kiskoo.loterias.honduras',
    description:
      'Loterías de Honduras es una aplicación para todos los jugadores de Loto Honduras (Loto HN).'
  },
  {
    id: 9,
    image: 'mexico',
    skills: 'React Native',
    groups: ['mobile'],
    title: 'Mexico',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'loteriasdemexico.com',
    subtitle: 'Resultados Pronósticos y Loteria Nacional',
    url: 'https://play.google.com/store/apps/details?id=com.kiskoo.lotterymexico',
    description:
      'Resultados del Tris de Hoy, Chispazo, Melate y de todos los sorteos de la Loteria Nacional Mexicana (Lotenal) y Pronosticos para la Assistencia Publica.'
  },
  {
    id: 10,
    image: 'loterias',
    skills: 'React Native',
    groups: ['mobile'],
    title: 'Loterias',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'conectate.com.do',
    subtitle: 'Conectate.com.do | Loterías, Turismo y Noticias Dominicanas',
    url: 'https://play.google.com/store/apps/details?id=com.kiskoo.loterias.conectate',
    description:
      'Resultados de Leidsa, Lotería Nacional, Lotería Real y Loteka; eventos, encuestas, precios de combustibles y guía turística de la República Dominicana.'
  },
  {
    id: 11,
    image: 'dominicanas',
    skills: 'React Native',
    groups: ['mobile'],
    title: 'Dominicanas',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'loteriasdominicanas.com',
    subtitle: 'LoteriasDominicanas.com: Lotería Nacional | Leidsa | Real | Loteka',
    url: 'https://play.google.com/store/apps/details?id=kiskoo.s.r.l',
    description:
      'Resultados de hoy de la Lotería Nacional, Leidsa, Lotería Real Tarde, Quiniela Loteka, NY (Nueva York) y todos los sorteos de loterias dominicanas.'
  },
  {
    id: 12,
    image: 'pelota',
    skills: 'React Native',
    groups: ['mobile'],
    title: 'Pelota',
    isVisit: true,
    imageCounts: 4,
    titleDetail: 'pelotainvernal.com',
    subtitle: 'PelotaInvernal.com | Resultados, Calendarios y Posiciones',
    url: 'https://play.google.com/store/apps/details?id=com.pelota',
    description:
      'Cobertura completa de la Pelota Invernal y la Serie del Caribe: Resultados en Vivo, Calendarios, Tabla de Posiciones y mucho más.'
  },
  {
    id: 13,
    image: 'lotomundo',
    skills: 'React Native',
    groups: ['mobile'],
    title: 'Lotomundo',
    isVisit: true,
    imageCounts: 4,
    titleDetail: 'lotomundo.com',
    subtitle: 'Lotomundo.com',
    url: 'https://play.google.com/store/apps/details?id=lotomundo.com',
    description:
      'Lotomundo'
  },
  {
    id: 14,
    image: 'conectate',
    skills: 'PHP + Wordpress',
    groups: ['php'],
    title: 'Conectate',
    isVisit: true,
    imageCounts: 5,
    titleDetail: 'conectate.com.do',
    subtitle: 'Conectate.com.do | Loterías, Turismo y Noticias Dominicanas',
    url: 'https://www.conectate.com.do',
    description:
      'Resultados de Leidsa, Lotería Nacional, Lotería Real y Loteka; eventos, encuestas, precios de combustibles y guía turística de la República Dominicana.'
  },
  {
    id: 15,
    image: 'betpolls',
    skills: 'PHP + Laravel',
    groups: ['php'],
    title: 'Betpolls',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'betpolls.com',
    subtitle: 'Betpolls.com | Free Picks, Expert Tips and Fantasy',
    url: 'https://betpolls.com',
    description:
      "Check out today's top picks and play Betpolls.com Fantasy,  it's free, its fun and you can win Amazon Gift Cards.  Betpolls.com covers NFL, MLB, NBA, NHL, College Sports and all the main Soccer Leagues."
  },
  {
    id: 16,
    image: 'guiamedica',
    skills: 'PHP + Wordpress',
    groups: ['php'],
    title: 'Guiamedica',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'guiamedica.com.do',
    subtitle: 'GuiaMedica.com.do | Directorio Médico Dominicano',
    url: 'https://guiamedica.com.do',
    description:
      'Directorio médico más completo de la Republica Dominicana donde miles de dominicanos buscan médicos, centro médicos y hospitales.'
  },
  {
    id: 17,
    image: 'earlylearningfund',
    skills: 'Laravel + Wordpress',
    groups: ['php'],
    title: 'Early Learning Fund',
    isVisit: true,
    imageCounts: 4,
    titleDetail: 'earlylearningfund.org.au',
    subtitle: 'Early Learning Fund',
    url: 'https://www.earlylearningfund.org.au',
    description:
      'Early Learning Fund - Enabling every child to have a better future'
  },
  {
    id: 18,
    image: 'smith',
    skills: 'Laravel + Wordpress',
    groups: ['php'],
    title: 'Smith Collective',
    isVisit: true,
    imageCounts: 4,
    titleDetail: 'earlylearningfund.org.au',
    subtitle: 'Southport Rentals | 1, 2 and 3 Bedroom Apartments | Smith Collective',
    url: 'https://www.smithcollective.com.au',
    description:
      'Smith Collective is a unique community providing Southport rentals of 1, 2 or 3 bedroom apartments and a unique retail hub on the Gold Coast.'
  },
  {
    id: 19,
    image: 'wolff',
    skills: 'Laravel + Wordpress',
    groups: ['php'],
    title: 'Wolff Mining',
    isVisit: true,
    imageCounts: 4,
    titleDetail: 'wolffmining.com.au',
    subtitle: 'Wolff Mining',
    url: 'https://www.wolffmining.com.au',
    description:
      'Wolff Mining provides a range of automated and innovative solutions such as large scale satellite bulk dozer push and semi-autonomous blast hole drilling'
  },
  {
    id: 20,
    image: 'yabbr',
    skills: 'Laravel + Wordpress',
    groups: ['php'],
    title: 'Yabbr',
    isVisit: true,
    imageCounts: 2,
    titleDetail: 'yabbr.com.au',
    subtitle: 'SMS and Voice Broadcast for Australian Business',
    url: 'https://yabbr.com.au',
    description:
      'Yabbr is an SMS and Voice broadcast platform for Australian Businesses. Access via API or Dashboard to send Campaigns, Surveys, and enage with your Audience via OmniChannel Chat.'
  },
];

function Figure({ id, groups, imageName, title, skills, handleLearnMore }) {
  const imgSrc = 'images/projects/' + imageName + '.png';
  const groupsJSON = JSON.stringify(groups);

  return (
    <div
      key={id}
      className="col-md-6 col-sm-6 col-lg-4 picture-item"
      data-groups={groupsJSON}
      data-title={title}
    >
      <div className="aspect aspect--16x9">
        <div className="aspect__inner">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="picture-item-overlay" />
        <div className="picture-item-hover">
          <div className="picture-title">{title}</div>
          <div className="picture-skills">{skills}</div>
          <a
            className="learn-more"
            onClick={() => {
              handleLearnMore(id);
            }}
          >
            Learn More
          </a>
        </div>
      </div>
      <figcaption>{title}</figcaption>
    </div>
  );
}

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDataID: 0,
      modal: false
    };
    this.onClickLearnMore = this.onClickLearnMore.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    this.shuffle = new Shuffle(this.element, {
      itemSelector: '.picture-item',
      sizer: this.sizer
    });
    window.projectShuffleContainer = this.shuffle;
  }

  onClickLearnMore(id) {
    this.setState({
      modalDataID: id
    });
    this.toggle();
  }

  render() {
    const detailModalImageCounts = projects[this.state.modalDataID].imageCounts;
    const imagePrefix = projects[this.state.modalDataID].image;
    let detailImages = [];

    const { titleDetail, subtitle, description, url } = projects[
      this.state.modalDataID
    ];
    for (let index = 0; index < detailModalImageCounts; index++) {
      detailImages.push(
        <div>
          <img
            src={'images/projects/' + imagePrefix + '_' + index + '.png'}
            alt=""
          />
        </div>
      );
    }
    return (
      <React.Fragment>
        <PhotoGridFilter />
        <div
          className="row my-shuffle-container shuffle"
          ref={ref => (this.element = ref)}
        >
          {projects.map(project => (
            <Figure
              key={project.id}
              id={project.id}
              groups={project.groups}
              imageName={project.image}
              title={project.title}
              skills={project.skills}
              handleLearnMore={this.onClickLearnMore}
            />
          ))}
          <div
            ref={element => (this.sizer = element)}
            className="col-xs-1 col-sm-1 photo-grid__sizer"
          />
        </div>
        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="project-detail-modal"
        >
          <ModalBody>
            <Carousel>{detailImages}</Carousel>
            <div className="title">{titleDetail}</div>
            <div className="sub-title">{subtitle}</div>
            <div className="divider" />
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </ModalBody>
          <ModalFooter>
            {url && (
              <a
                href={url}
                className="visit-button"
                target="_blank"
                color="primary"
                onClick={this.toggle}
              >
                VISIT SITE
              </a>
            )}{' '}
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default PhotoGrid;
