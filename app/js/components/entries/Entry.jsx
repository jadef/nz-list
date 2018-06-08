import React from 'react';
import PropTypes from 'prop-types';

// -- Components
import Tags from './Tags';

// -- Styles
import '../../../sass/components/entries/entry.scss';

/* -- Hierarchy
  - App
    - Main
      - Entries
        - *Entry*
          - Tags
            - Tag
*/

class Entry extends React.Component {


  BuildImages = () => {
    // Build Image List
    const imageList = this.props.entry.image;

    const allImages = imageList.map((image, index) => (
      <span className={index === 0 ? "img first" : "img"}><img  src={"https://picsum.photos/" + image} /></span>
    ));

    return ( allImages );
  }

  render() {
    const entry = this.props.entry;

    return (
      <section className={(entry.claimed ? 'entry claimed' : 'entry')} >
        <div className="title" id={entry.id}>
          <h3>{entry.title}</h3>
        </div>
        <div className="desc">
          <div className="images">{this.BuildImages()}</div>
          <div className="content">
            <div dangerouslySetInnerHTML={ {__html: entry.content} } />
            <div className="notes">{entry.notes}</div>
          </div>
          {entry.tags ? <Tags tags={entry.tags} activeTags={this.props.activeTags} /> : null}
        </div>
      </section>
    );
  }
}

// -- Props
Entry.propTypes = {
  entry: PropTypes.object,
  newLetter: PropTypes.bool,
  activeTags: PropTypes.array
};

export default Entry;
