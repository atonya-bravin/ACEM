import React, { Component } from 'react'
import { MenuItem, Icon, Menu } from 'semantic-ui-react'

export default class MenuLabeledIcons extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='w-full bottom-menu fluid' id="sm-menu">
        <Menu icon='labeled' className='flex justify-center'>
          <a className='w-[25%]' href='#sm-home'>
            <MenuItem
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              className='w-[100%]'
            >
              <Icon name='home' />
                Home
            </MenuItem>
          </a>

          <a className='w-[25%]' href='#about'>
            <MenuItem
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
              className='w-[100%]'
            >
              <Icon name='info' />
              About
            </MenuItem>
          </a>

          <a className='w-[25%]' href='#footer'>
            <MenuItem
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
              className='w-[100%]'
            >
              <Icon name='address card' />
              Contact
            </MenuItem>
          </a>
        </Menu>
      </div>
    )
  }
}