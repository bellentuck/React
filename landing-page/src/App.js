import React from 'react';
import Logo from './Logo.js';
import './App.css';

//************************* Container ***************************//
var App = React.createClass({
  apiKey: '87dfa1c669eea853da609d4968d294be', //for The Movie DB
  //// HELPER METHODS ////
  // 1) initialize state
  getInitialState: function() {
    return {searchTerm: "", searchUrl: ""};
  },
  // 2) compose a query
  handleKeyUp: function(e) {
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      var searchUrl = "search/multi?query" + this.state.searchTerm +
                      "&api_key=" + this.apiKey;
      this.setState({searchUrl: searchUrl});
    }
  },
  // 3) change state to match query
  handleChange: function(e) {
    this.setState({searchTerm: e.target.value});
  },
  //// RENDER METHOD ////
  render: function() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input
              type="search"
              onKeyUp={this.handleKeyUp}
              onChange={this.handleChange}
              placeholder="Search for whatever you wish"
              //placeholder="You will search for what title you wish"
              value={this.state.searchTerm}
            />
          </div>
        </header>

        <Hero />
        <TitleList title="Your Results: They Are Not In" url={this.state.searchUrl} />
        // 1."Try"
        <TitleList title="If You Do Not Know What Is Best for You" url='discover/tv?sort_by=popularity.desc&page=1' />
        // 2."Trend"
        <TitleList title="Trendy Chiquy Cool" url='discover/movie?sort_by=popularity.desc&page=1' />
        // 4."Thrill"
        <TitleList title="Do Not Be Afraid, It's Only Horrifying Film" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        // 3."Trip"
        <TitleList title="Fictional Science" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        // 5."Twerk"
        <TitleList title="Ha-Has" url='genre/35/movies?sort_by=popularity.desc&page=1' />
      </div>
    );
  }
});

//************************* Navigation ***************************//
var Navigation = React.createClass({
  render: function() {
    return (
      <div id="navigation" className="Navigation">
        <nav>
          <ul>
            <li>Browse</li>
            <li>Yours</li>
            <li>Tops</li>
            <li>News</li>
          </ul>
        </nav>
      </div>
    );
  }
});

//************************* User Profile ***************************//
var UserProfile = React.createClass({
  render: function() {
    return (
      <div className="UserProfile">
        <div className="User">
          <div className="name">It Is You</div>
          <div className="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg" alt="profile" /></div>
        </div>
      </div>
    );
  }
});

//************************* Hero ***************************//
var Hero = React.createClass({
  render: function() {
    return (
      <div id="hero" className="Hero" style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}}>
        <div className="content">
          <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
          <h2>Season 42 out in stock</h2>
          <p>Eventually, you are going to love this one. Not before you are
          going to want to take it and throw it as far as you can away from
          you. But it will return like a good bad boomerang. And so you will
          love it. Because it is good.</p>
          <div className="button-wrapper">
            <HeroButton primary={true} text="Imminent indulgence" />
            <HeroButton primary={false} text="+ Add to yourz" />
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    );
  }
});

//************************* Hero Button ***************************//
var HeroButton = React.createClass({
  render: function() {
    return (
      <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
    );
  }
});

//************************* Title List [Container] ***************************//
var TitleList = React.createClass({
  apiKey: '87dfa1c669eea853da609d4968d294be', //for The Movie DB
  //// HELPER METHODS ////
  // 1) initialize state
  getInitialState: function() {
    return {data: [], mounted: false};
  },
  // 2) asynchronously load in content via The Movie DB API
  // (actually perform the AJAX requests)
  loadContent: function() {
    var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url +
                     '&api_key=' + this.apiKey;
    fetch(requestUrl).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({data: data});
    }).catch((err) => {
      console.log("There has been an error.");
    });
  },
  // 3) update props (and by extension state) accordingly
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== '') {
      this.setState({mounted: true, url: nextProps.url}, () => {
        this.loadContent();
      });
    }
  },
  // 4) coordinate AJAX requests to retrieve data
  componentDidMount: function() {
    if (this.props.url !== '') {
      this.loadContent(); // here's where the AJAX request gets carried out
      this.setState({mounted: true});
    }
  },
  //// RENDER METHOD ////
  render: function() {
    var titles = '';
    if (this.state.data.results) {
      titles = this.state.data.results.map(function(title, i) {
        // render a row
        if (i < 5) {
          var name = '';
          var backDrop = 'http://image.tmdb.org/t/p/original' +
                          title.backdrop_path;
          if (!title.name) {
            name = title.original_title;
          } else {
            name = title.name;
          }

          return (
            <Item
              key={title.id}
              title={name}
              score={title.vote_average}
              overview={title.overview}
              backdrop={backDrop}
            />
          );

        } else {
          return (<div key={title.id}></div>);
        }
      });

    }

    return (
      <div
        ref="titlecategory"
        className="TitleList"
        data-loaded={this.state.mounted}
      >
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {titles}
          </div>
        </div>
      </div>
    );
  }
});

//************************* [Title List] Item ***************************//
var Item = React.createClass({
  render: function() {
    return (
      <div
        className="Item"
        style={{backgroundImage: 'url(' + this.props.backdrop + ')'}}
      >
        <div className="overlay">
          <div className="title">{this.props.title}</div>
          <div className="rating">{this.props.score}/10</div>
          <div className="plot">{this.props.overview}</div>
          <ListToggle />
        </div>
      </div>
    );
  }
});

//************************* List Toggle ***************************//
var ListToggle = React.createClass({
  //// HELPER METHODS ////
  // 1) initialize state
  getInitialState: function() {
    return ({ toggled: false })
  },
  // 2) update state given click event
  handleClick: function() {
    if (this.state.toggled === true) {
      this.setState({ toggled: false });
    } else {
      this.setState({ toggled: true });
    }
  },
  //// RENDER METHOD ////
  render: function() {
    return (
      <div
        className="ListToggle"
        onClick={this.handleClick}
        data-toggled={this.state.toggled}
      >
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    );
  }
});

export default App;
