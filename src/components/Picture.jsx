// import './Style.css';

const Picture = ({photographer, src}) => {
    const {large} = src
  return (
            <div className="card">
              <div className="image">
                  <img src={large} alt="" />
              </div>
              <p>{photographer }</p>
            </div>
  )
}

export default Picture