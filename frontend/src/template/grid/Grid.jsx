import React, {Component} from 'react'

const classesOptions = {
    0: col => !!col && `col-xs-${col}`,
    1: col => !!col && `col-sm-${col}`,
    2: col => !!col && `col-md-${col}`,
    3: col => !!col && `col-lg-${col}`
}

export default class Grid extends Component {
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []

        return cols.reduce((concated, current, index) => { 
            return `${concated} ${classesOptions[index](current)}` 
        }, '')
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || '1 2')
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}