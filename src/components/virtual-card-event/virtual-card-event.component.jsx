import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-buton.components';
import DataBox from '../data-box/data-box.component';
import {ReactComponent as InfinityIcon} from './assets/infinity.svg';

import './virtual-card-event.styles.scss'

class VirtualCardEvent extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="virtual-card-event">
        <div className="image-wrapper">
          <img src={this.props.imageURL} className="image" alt={this.props.name}/>
        </div>
        <div className="box-data-list">
          <DataBox lable={"Fecha:"}>26 de marzo</DataBox>
          <DataBox lable={"Hora:"}>17hs</DataBox>
          <DataBox lable={"Cupos:"}>{this.props.withLimit ? this.props.limit : <InfinityIcon />}</DataBox>
          <DataBox lable={"Medio:"}>{this.props.plataform}</DataBox>
        </div>
        <div className="button-wrapper">
          <CustomButton>Inscribirse</CustomButton>
          <div className="avatar-list"></div>
        </div>
      </div>
    );
  }
} 

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(null)(VirtualCardEvent);