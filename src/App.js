import React, { Component } from "react";
import "./App.css";

import listenApi from "./listenApi";

class App extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      genre: "",
      genreString: "",
      podcasts: [],
      userTime: 20,
      isLoading: true,
    };
  }

  // at runtime
  componentDidMount() {
    // retrieving the genres, storing them in state.
    listenApi("genres", { top_level_only: 1 }).then((response) => {
      this.setState({
        genres: response.data.genres,
      });
    });
    // get podcasts at runtime (any genre)
    // this.getPodcasts();
  }

  // retrieving podcasts with api call from passed params. storing results in state.
  getPodcasts() {
    // const genreString = this.state.genreString;
    const { genre, genreString, userTime } = this.state;

    const len_min = parseInt(userTime) - 5;
    const len_max = parseInt(userTime) + 5;
    console.log({len_min, len_max})

    listenApi("search", {
      q: genreString,
      len_min,
      len_max,
      genre_ids: genre,
      // sort_by_date: 1,
      language: "English",
    }).then(response => {
      console.log(response);

      this.setState({
        podcasts: response.data.results,
        isLoading: false,
      })
    })



    // listenApi("best_podcasts", { genre_id: this.state.genre }).then(
    //   (response) => {
    //     console.log(response.data.podcasts);
    //     this.setState(
    //       {
    //         podcasts: response.data.podcasts,
    //       }
    //       // () => {
    //       //   const listCopy = [...this.state.podcasts];
    //       //   listCopy.forEach((podcast, index) => {
    //       //     listCopy[index].avg_minutes = 0;
    //       //   });

    //       //   this.setState({
    //       //     podcasts: listCopy,
    //       //   });
    //       // }
    //     );
    //     this.getPodcastTimes();
    //   }
    // );
  }

  /** get average time of podcast episodes and store in state */
  // getPodcastTimes = () => {
  //   // make copy of podcast state
  //   let listCopy = [...this.state.podcasts];

  //   // list of podcast IDs
  //   const podcastIDs = listCopy.map((podcast) => podcast.id);

  //   // loop through podcast IDs and add average episode times to list copy
  //   podcastIDs.forEach((id, index) => {
  //     listenApi(`podcasts/${id}`).then((response) => {
  //       const episodes = response.data.episodes;
  //       console.log(episodes);

  //       // get average time of episodes
  //       const avg_minutes = this.getAverageTime(episodes);

  //       listCopy[index].avg_minutes = avg_minutes;
  //       this.setState({
  //         podcasts: listCopy,
  //         isLoading: false,
  //       });
     
  //     });
   
  //   });
  //   // console.log(listCopy);

  //   // replace podcast state with new list containing average minutes


  // };

  // /** Get average time of episodes */
  // getAverageTime(episodes) {
  //   let total = 0;
  //   // loop through episodes, return the total audio length in seconds for each epsiode.
  //   episodes.forEach((episode) => {
  //     total += episode.audio_length_sec;
  //   });
  //   // converting average time from seconds to minutes for each podcast
  //   const minutes = Math.round(total / episodes.length / 60);

  //   console.log(minutes);
  //   return minutes;
  // }


  // set genre in state on change of select dropdown
  selectGenre = (event) => {
    this.setState(
      {
        genre: event.target.value,
        genreString: event.target[event.target.selectedIndex].text,
      },
      () => {
        //callback function to be run after state is set
        // TODO get rid of this before production
        // this.getPodcasts(); // get podcasts on genre select
      }
    );
  };

  // set user time in state on change of slider
  setUserTime = (event) => {
    this.setState({
      userTime: event.target.value,
    });
  };

  // get podcasts on form submit
  handleSubmit = (event) => {
    event.preventDefault();
    this.getPodcasts();
  };

  render() {
    return (
      <div className="App">
        <form action="submit">
          {/* time slider */}
          <label htmlFor="time">Enter time</label>
          <input
            onChange={this.setUserTime}
            type="range"
            name="time"
            id="time"
            min="0"
            max="120"
            value={this.state.userTime}
          />
          {/* display time selected */}
          <span>{this.state.userTime}</span>

          {/* genre select */}
          <label htmlFor="genre"></label>
          <select onChange={this.selectGenre} name="genre" id="genre">
            <option value="">Choose genre</option>
            {this.state.genres.map((genre) => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>

          <button onClick={this.handleSubmit} type="submit">
            Submit
          </button>
        </form>


        {this.state.isLoading ? <p>Loading...</p> :     
          <ul>
            {this.state.podcasts.map((podcast) => {
              const duration = Math.round(parseInt(podcast.audio_length_sec / 60));
              
              return (
                <div key={podcast.id} className="podcast">
                  <h2>{podcast.title_original}</h2>
                  <p>{podcast.description_highlighted}</p>
                  <p>{duration} minutes</p>
                </div>
              );
            })}
          </ul>
        }
      </div>
    );
  }
}

export default App;
