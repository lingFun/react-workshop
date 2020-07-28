async componentDidMount = () => {
    const res = await fetch('/api/students');
    const data = await res.json();
    this.setState({
        students: data
    })
}