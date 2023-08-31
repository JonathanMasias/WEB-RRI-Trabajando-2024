(function() {
  var createPlayer, formatTime, i, len, player, players;

  formatTime = function(timeInSec) {
    var hrs, mins, ret, secs;
    hrs = ~~(timeInSec / 3600);
    mins = ~~((timeInSec % 3600) / 60);
    secs = ~~(timeInSec % 60);
    ret = "";
    if (hrs > 0) {
      ret += hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += mins + ":" + (secs < 10 ? "0" : "");
    ret += secs;
    return ret;
  };

  createPlayer = function(box) {
    var player, pp, timeDisplay, updateTime;
    player = box.querySelector('audio');
    pp = box.querySelector('button');
    timeDisplay = box.querySelector(".audio-player__time-display");
    updateTime = function() {
      timeDisplay.setAttribute("aria-label", `${formatTime(player.currentTime)} out of ${formatTime(player.duration)}`);
      return timeDisplay.textContent = `${formatTime(player.currentTime)} / ${formatTime(player.duration)}`;
    };
    //! Set initial states
    box.dataset.playbackState = 'unstarted';
    //! Button listener
    pp.addEventListener('click', function() {
      if (player.paused) {
        player.play().catch(function() {});
        return pp.setAttribute("aria-label", "Playback not resumed. Click to play.");
      } else {
        return player.pause();
      }
    });
    //! Audio listeners
    player.addEventListener('playing', function() {
      box.dataset.playbackState = 'playing';
      pp.setAttribute("aria-label", "Playing. Click to Pause.");
      return pp.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    });
    player.addEventListener('pause', function() {
      box.dataset.playbackState = 'pause';
      pp.setAttribute("aria-label", "Paused. Click to Play.");
      return pp.innerHTML = `<i class="fa-solid fa-play"></i>`;
    });
    player.addEventListener('ended', function() {
      box.dataset.playbackState = 'end';
      return pp.setAttribute("aria-label", "Playback ended. Click to restart.");
    });
    player.addEventListener('waiting', function() {
      box.dataset.playbackState = "buffering";
      return pp.setAttribute("aria-label", "Loading...");
    });
    player.addEventListener("timeupdate", updateTime);
    return player.addEventListener("durationchange", updateTime);
  };

  players = document.querySelectorAll('.audio-player');

  for (i = 0, len = players.length; i < len; i++) {
    player = players[i];
    createPlayer(player);
  }

}).call(this);

