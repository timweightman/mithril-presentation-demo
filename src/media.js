/*
  The Media class just has a handful of properties and a toString method
  that returns the title, and the year in parentheses.

  It also has a static 'search' method, that takes the type and search term
  as parameters and returns a promise. The search method will cast all the
  results into Media instances, by default the result contains an empty
  array, and I've made it non-blocking by adding background: true, which
  means we need to redraw manually when the promise resolves.
*/

function Media(data) {
  data = data || {}
  this.title = m.prop(data.Title) || ''
  this.year = m.prop(data.Year) || ''
  this.imdbId = m.prop(data.imdbID) || ''

  this.toString = function() {
    return this.title() + ' (' + this.year() + ')'
  }.bind(this)
}

Media.search = function searchMedia(type, search) {
  return m.request({
    method: 'GET',
    url: 'http://www.omdbapi.com',
    data: {
      type: type,
      s: search
    },
    type: Media,
    initialValue: [],
    background: true,
    unwrapSuccess: function(response) {
      return response.Search || []
    }
  })
}

module.exports = Media
