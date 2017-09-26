import React from 'react';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';

//Icones
import ActionGrade 			from 'material-ui/svg-icons/action/grade';
import DeviceStorage 		from 'material-ui/svg-icons/device/storage';
import MapsAddLocation 		from 'material-ui/svg-icons/maps/add-location';
import MapsAddLayers 		from 'material-ui/svg-icons/maps/layers';
import ContentFilterList 	from 'material-ui/svg-icons/content/filter-list';
import ArrowLeft 			from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Equalizer 			from 'material-ui/svg-icons/av/equalizer';


import FontIcon 			from 'material-ui/FontIcon';

export default class PainelDeFerramentas extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
    	open: true, // sempre vai ser true
    	retraido: true, // a tela carrega com o drawer retraído
    	subPainel: '',
    };
  }


  // botão que retrai o painel (setinha pra esquerda)
  handleTogglePainel = () => {
  		this.setState({
    		retraido: !this.state.retraido,
    		subPainel: '',
   		});
   };  


   // Botões no painel esquerdo (dos iconButtons)
  handleToggleSubPainel = (e) => {
  		this.setState({
    		retraido: false,
    		subPainel: e,
   		});
   };



  render() {


  	// Estilo do translate do painel para o drawer do lado esquerdo
	let translateFechado = 'translate3d(-270px, 0px, 0px)';

	// estilo do ícone para o drawer do lado esquerdo
	let direcaoDoIcone = 'rotate(0deg)';

	// estilo da posição do tooletip para o lado esquerdo
	let direcaoDoTooltipRight 	= 'auto';
	let	direcaoDoTooltipLeft 	= '100%';
	let posicaoDoTooltip	= 'bottom-right';
  	
  	if (this.props.secondary) {
  		// estilo do translate, ícone e tooltip do painel se o drawer for do lado direito
		translateFechado 		= 'translate3d(270px, 0px, 0px)';
		direcaoDoIcone 			= 'rotate(180deg)';
		posicaoDoTooltip		= 'bottom-left';
		direcaoDoTooltipRight 	= '100%';
		direcaoDoTooltipLeft 	= 'auto';
  	}


	// estilo do painel aberto
	const estiloAberto = {
		top: 64, // para ficar abaixo do appBar
		height: 'calc(100% - 64px)', // Para não vazar o layout para baixo
		transition: 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms', // duração do translate (animação)
		transform: 'translate3d(0px, 0px, 0px)' //desloca o drawer para a posição X = 0
	}
	// estilo do painel aberto
	const estiloFechado = {
		top: 64, 
		height: 'calc(100% - 64px)', 
		transition: 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms', 
		transform: translateFechado //desloca o drawer para a posição X = -270 ou 270 se secondary
		//transform: 'translate3d(-270px, 0px, 0px)' //desloca o drawer para a posição X = -270 ou 270 se secondary
	}



	const estiloIconButton = {
		icone: {
			width: 24,
			height: 24,
			color: 'rgba(255,255,255,0.6)',
		},
		iconeSetaEsquerda: {
			width: 35,
			height: 35,
			color: 'rgba(255,255,255,0.6)',
			marginLeft: '-11px',
			transform: direcaoDoIcone,
		},
		botao: {
			width: 50,
			height: 50,
		},
		botaoAtivo: {
			width: 50,
			height: 50,
			background: '#444',
		},
		botaoSetaEsquerda: {
			width: 10,
			border: 0,
			margin: 0,
			padding: 0,
			height: '100%',
		},
		tooltip: {
			right: direcaoDoTooltipRight, 
			left: direcaoDoTooltipLeft, 
			top: '3%',
			fontSize: '14px'
		},
		
	}


    return (
      <div>

 
        
        <Drawer 
	        open={true}
	        containerStyle={this.state.retraido ? estiloFechado : estiloAberto }
	        width={320}
	        zDepth={3}
	        openSecondary={this.props.secondary}
	        containerClassName={this.props.secondary?'containerPainelDeFerramentas secondary':'containerPainelDeFerramentas primary'}
        >
        <div className="col_container">
        	<div className="col_1">
	        	<br/>
	        		Abre o painel: {this.state.subPainel}
	        	</div>
        	<div className="col_2">
        		
        		<IconButton 
			    	onTouchTap={this.handleTogglePainel}
	        		iconStyle={estiloIconButton.iconeSetaEsquerda}
	        		style={estiloIconButton.botaoSetaEsquerda }>
				    <ArrowLeft/>
			    </IconButton>
        	</div>

        	<div className="col_3">
			    <IconButton 
			    	onTouchTap={this.handleToggleSubPainel.bind(this, 'basededados')}
				    tooltipPosition={posicaoDoTooltip}
	        		tooltipStyles={estiloIconButton.tooltip}
	        		tooltip="Bases de dados"
	        		iconStyle={estiloIconButton.icone}
	        		style={this.state.subPainel=='basededados' ? estiloIconButton.botaoAtivo : estiloIconButton.botao }>

				    <DeviceStorage />
			    </IconButton>

			    <IconButton 
			    	onTouchTap={this.handleToggleSubPainel.bind(this, 'analises')}
				    tooltipPosition={posicaoDoTooltip}
	        		tooltipStyles={estiloIconButton.tooltip}
	        		tooltip="Análises"
	        		iconStyle={estiloIconButton.icone}
	        		style={this.state.subPainel=='analises' ? estiloIconButton.botaoAtivo : estiloIconButton.botao }>
			      	
			      	<MapsAddLayers />
			    </IconButton>

			    <IconButton 
			    	onTouchTap={this.handleToggleSubPainel.bind(this, 'filtros')}
				    tooltipPosition={posicaoDoTooltip}
	        		tooltipStyles={estiloIconButton.tooltip}
	        		tooltip="Filtros"
	        		iconStyle={estiloIconButton.icone}
	        		style={this.state.subPainel=='filtros' ? estiloIconButton.botaoAtivo : estiloIconButton.botao }>
			      	
			      	<ContentFilterList />
			    </IconButton>

        		<IconButton 
        			onTouchTap={this.handleToggleSubPainel.bind(this, 'graficos')}
	        		iconStyle={estiloIconButton.icone}
	        		tooltipPosition={posicaoDoTooltip}
	        		tooltipStyles={estiloIconButton.tooltip}
	        		tooltip="Graficos (?)"
	        		style={this.state.subPainel=='graficos' ? estiloIconButton.botaoAtivo : estiloIconButton.botao }>

			      	<Equalizer />
			    </IconButton>

			    <IconButton 
        			onTouchTap={this.handleToggleSubPainel.bind(this, 'ponto')}
	        		iconStyle={estiloIconButton.icone}
	        		tooltipPosition={posicaoDoTooltip}
	        		tooltipStyles={estiloIconButton.tooltip}
	        		tooltip="Adicionar ponto (?)"
	        		style={this.state.subPainel=='ponto' ? estiloIconButton.botaoAtivo : estiloIconButton.botao }>

			      	<MapsAddLocation />
			    </IconButton>

        	</div>
        </div>
        </Drawer>
      </div>
    );
  }
}