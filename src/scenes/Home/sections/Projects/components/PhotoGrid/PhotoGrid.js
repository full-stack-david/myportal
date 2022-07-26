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
