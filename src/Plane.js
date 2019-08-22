import React from 'react'
import './Plane.css'

class Plane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            player : {
                name : '',
                x_pos : 0,
                y_pos : 0,
            },
            rows : [[
                {
                    cell_type : 'entrance',
                    x_pos : 0,
                    y_pos : 0,
                },
                {
                    cell_type : 'aisle',
                    x_pos : 1,
                    y_pos : 0,
                },
                {
                    cell_type : 'aisle',
                    x_pos : 2,
                    y_pos : 0,
                },
                {
                    cell_type : 'aisle',
                    x_pos : 3,
                    y_pos : 0,
                },
                {
                    cell_type : 'aisle',
                    x_pos : 4,
                    y_pos : 0,
                },
                {
                    cell_type : 'seat',
                    x_pos : 5,
                    y_pos : 0,
                },
                {
                    cell_type : 'seat',
                    x_pos : 6,
                    y_pos : 0,
                },
                {
                    cell_type : 'seat',
                    x_pos : 7,
                    y_pos : 0,
                },
                {
                    cell_type : 'wall',
                    x_pos : 8,
                    y_pos : 0,
                },
                
            ],
            [
                {
                    cell_type : 'wall',
                    x_pos : 0,
                    y_pos : 1,
                },
                {
                    cell_type : 'seat',
                    x_pos : 1,
                    y_pos : 1,
                },
                {
                    cell_type : 'seat',
                    x_pos : 2,
                    y_pos : 1,
                },
                {
                    cell_type : 'seat',
                    x_pos : 3,
                    y_pos : 1,
                },
                {
                    cell_type : 'aisle',
                    x_pos : 4,
                    y_pos : 1,
                },
                {
                    cell_type : 'seat',
                    x_pos : 5,
                    y_pos : 1,
                },
                {
                    cell_type : 'seat',
                    x_pos : 6,
                    y_pos : 1,
                },
                {
                    cell_type : 'seat',
                    x_pos : 7,
                    y_pos : 1,
                },
                {
                    cell_type : 'wall',
                    x_pos : 8,
                    y_pos : 1,
                },
            ],
            [
                {
                    cell_type : 'wall',
                    x_pos : 0,
                    y_pos : 2,
                },
                {
                    cell_type : 'seat',
                    x_pos : 1,
                    y_pos : 2,
                    
                },
                {
                    cell_type : 'seat',
                    x_pos : 2,
                    y_pos : 2,
                    
                },
                {
                    cell_type : 'seat',
                    x_pos : 3,
                    y_pos : 2,
                },
                {
                    cell_type : 'aisle',
                    x_pos : 4,
                    y_pos : 2,
                },
                {
                    cell_type : 'seat',
                    x_pos : 5,
                    y_pos : 2,
                },
                {
                    cell_type : 'seat',
                    x_pos : 6,
                    y_pos : 2,
                },
                {
                    cell_type : 'seat',
                    x_pos : 7,
                    y_pos : 2,
                },
                {
                    cell_type : 'wall',
                    x_pos : 8,
                    y_pos : 2,
                },
            ],
            [
                {
                    cell_type : 'exit',
                    x_pos : 0,
                    y_pos : 3,
                },
                {
                    cell_type : 'seat',
                    x_pos : 1,
                    y_pos : 3,
                },
                {
                    cell_type : 'seat',
                    x_pos : 2,
                    y_pos : 3,
                },
                {
                    cell_type : 'seat',
                    x_pos : 3,
                    y_pos : 3,
                },
                {
                    cell_type : 'aisle',
                    x_pos : 4,
                    y_pos : 3,
                },
                {
                    cell_type : 'seat',
                    x_pos : 5,
                    y_pos : 3,
                },
                {
                    cell_type : 'seat',
                    x_pos : 6,
                    y_pos : 3,
                },
                {
                    cell_type : 'seat',
                    x_pos : 7,
                    y_pos : 3,
                },
                {
                    cell_type : 'exit',
                    x_pos : 8,
                    y_pos : 3,
                },
            ]]
        }
    }

    renderRows(){
        const rowsToRender = []
        for (let row of this.state.rows){ 
            let cellsToRender = row.map(cell => {
                let className = 'Cell ' + cell.cell_type

                if (cell.x_pos === this.state.player.x_pos &&
                    cell.y_pos === this.state.player.y_pos){
                        className += ' player'
                    }
                return <div className={className}>{cell.cell_type}</div>
            })
            rowsToRender.push(cellsToRender)
        }
        return rowsToRender;
    }
        render() {
            return (<div className='Plane'>
                {this.renderRows()}
            </div>)
        }


    
    
}

export default Plane
