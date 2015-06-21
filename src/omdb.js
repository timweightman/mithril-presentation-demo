var omdb = {
  search: function(type, search) {
    var deferred = m.deferred()

    m.request({
      method: 'GET',
      url: 'http://www.omdbapi.com/',
      data: {
        type: type,
        s: search
      },
      initialValue: [],
      background: true
    }).then(function(response) {
      if (response.Error) {
        return deferred.reject(response.Error)
      }

      return deferred.resolve(response.Search || [])
    })

    return deferred.promise
  }
}

module.exports = omdb;
