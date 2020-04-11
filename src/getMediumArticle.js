getMediumArticle = (topic) => {
    let url = "https://medrum.herokuapp.com/articles"
    if (topic) url += `?topic=${topic}`
    axios.get(url)
    .then(res => {
        this.setState({
            loading: false,
            articles: res.data
        })
    })
    .catch(err => this.setState({noInternetError: true, loading:false}))
}