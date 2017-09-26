import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import logo from './../logo-sing.svg';

// Icones
import SocialPublic 		from 'material-ui/svg-icons/social/public';
import NavigationMore 		from 'material-ui/svg-icons/navigation/more-vert';
import ContentRemove		from 'material-ui/svg-icons/content/remove-circle';
import HardwareDesktop		from 'material-ui/svg-icons/hardware/desktop-mac';
import NavigationClose		from 'material-ui/svg-icons/navigation/close';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const estiloIconButton = {
	icone: {
		width: 24,
		height: 24,
		color: 'rgba(255,255,255,0.8)'
	},
	botao: {
		width: 64,
		height: 64,
	},
	tooltip: {
		left: '100%', 
		top: '3%',
		fontSize: '14px'
	}
}


const AppBarTelaMapaInterna = () => (

  <AppBar
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    zDepth={1}
    title="Prefeitura de Santo Antônio do Rio Sem Peixe"
  >

  	<img id="logo-sing" src={logo} />


	<IconButton 
		tooltipPosition="bottom-left"
		tooltip="Publicar mapa"
		iconStyle={estiloIconButton.icone}
	    style={estiloIconButton.botao }
	    >
		<SocialPublic />
	</IconButton>

	<IconMenu
	      iconButtonElement={
	      	<IconButton 
	      		iconStyle={estiloIconButton.icone}
	    		style={estiloIconButton.botao }
	    	>
	      		<NavigationMore />
	      	</IconButton>
	      }
	      anchorOrigin={{horizontal: 'left', vertical: 'center'}}
	      targetOrigin={{horizontal: 'left', vertical: 'top'}}
	    >
	      <MenuItem primaryText="Pré-visualizar" leftIcon={<HardwareDesktop />} />
	      <MenuItem primaryText="Sair deste mapa" leftIcon={<NavigationClose />} />
	      <Divider />
	      <MenuItem primaryText="Excluir este mapa" leftIcon={<ContentRemove />} />
	    </IconMenu>

	    
  </AppBar>
);

export default AppBarTelaMapaInterna;