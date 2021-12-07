import data from '../delegate';

export default function GridList() {
    const grid = data.gridlist.items
    return <div className="container">
        <h3 className="grey-text text-darken-1" >{data.gridlist.title}</h3>
        <blockquote>{data.gridlist.description}</blockquote>
        <div className="row">
            {grid && grid.map(p =>
                <div key={p.title} className="col s12 m4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img alt={p.title} className="responsive-img" src={p.img} />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{p.title}<i className="material-icons right">more_vert</i></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{p.title}<i className="material-icons right">close</i></span>
                            <p>{p.description}</p>
                            <a className={p.action.class} href={p.action.href}>learn more</a>
                        </div>
                    </div>

                </div>
            )}
        </div>
    </div>
};