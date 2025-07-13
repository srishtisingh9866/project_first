class APIFunctionality {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i"
          }
        }
      : {};

    console.log("Searching with keyword:", keyword); // ✅ Optional debug
    this.query = this.query.find({ ...keyword });
    return this;
  }
}

export default APIFunctionality;
