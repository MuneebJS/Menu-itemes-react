
class Menu extends React.Component {
    render() {
        let menus = ["Home", 'About', 'Servces', 'Career', 'Contact Us'];
        return (
            <div>
                {menus.map(function (value, idx) {
                    return (
                        <div key={idx}>
                            <Link label={value} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

class Link extends React.Component {
    render() {
        const url = this.props.label.toLowerCase().replace(' ', '-')+'.html';
        return (
            <div>
                <a href={url}>
                    {this.props.label}
                </a>
                <br/>
            </div>
        )
    }
}
ReactDOM.render(
    <Menu/>,
    document.getElementById('app')
    )
