import React from "react";

class Market extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const jobs = [
      {
        company: `Schmisney`,
        contact: `schmisneySchmouse@Schmisney.com`,
        job: `Wear a cartoon rat costume for points. Must be a human`,
        transactionType: `buy`,
        price: `10 points per day`,
        classification: `labor`,
        stars: 1
      },
      {
        company: `Schmoogle`,
        contact: `schmineySchmrin@schmoogle.com`,
        job: `Write some code that passes a test`,
        transactionType: `buy`,
        price: `10 points for all tests passing`,
        classification: `labor`,
        stars: 2
      },
      {
        company: ``,
        contact: `mrMan@mmystery.com`,
        job: `Come over to my place for some bro time`,
        transactionType: `both`,
        price: `0`,
        classification: `missed connections`,
        stars: 0
      },
      {
        company: `jalopy.com`,
        contact: `seller@jalopy.com`,
        job: `buy this car`,
        transactionType: `sell`,
        price: `1000`,
        classification: `automobiles`,
        stars: 4
      },
      {
        company: `hireNfire.com`,
        contact: `manager@hnf.com`,
        job: `hiring programmes`,
        transactionType: `sell`,
        price: `10`,
        classification: `labor`,
        stars: 5
      },
      {
        company: `hireNfire.com`,
        contact: `manager@hnf.com`,
        job: `selling programmes`,
        transactionType: `buy`,
        price: `100`,
        classification: `labor`,
        stars: 2
      },
      {
        company: `space-skum.com`,
        contact: `nelo@skum.com`,
        job: `hiring hardware engineers`,
        transactionType: `buy`,
        price: `100`,
        classification: `labor`,
        stars: 2
      },
      {
        company: `nasta.com`,
        contact: `ronaldGrump@ermerican.com`,
        job: `buying rides on the space shuttle`,
        transactionType: `sell`,
        price: `100`,
        classification: `labor`,
        stars: 2
      }
    ];

    return (
      <div>
        <h2>Market</h2>

        <h3>Make a post</h3>
        <form>
          Search:
          <br />
          <input type="text" name="search" />
          <br />
          <input type="radio" name="transaction" value="buy" checked /> Buy
          <br />
          <input type="radio" name="transaction" value="sell" /> Sell
          <br />
          <input type="radio" name="transaction" value="buysell" /> Both
        </form>

        <hr/>
        <h3>Answer a post</h3>

        <form>
          Search:
          <br />
          <input type="text" name="search" />
          <br />
          <input type="radio" name="transaction" value="buy" checked /> Buy
          <br />
          <input type="radio" name="transaction" value="sell" /> Sell
          <br />
          <input type="radio" name="transaction" value="buysell" /> Both
        </form>
        <hr />
        <table>
          <tbody>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>description</th>
              <th>Transaction type</th>
              <th>Price</th>
              <th>Stars</th>
            </tr>

            {jobs.map(jb => {
              return (
                <tr>
                  <td>{jb.company}</td>
                  <td>{jb.contact}</td>
                  <td>{jb.job}</td>
                  <td>{jb.transactionType}</td>
                  <td>{jb.price}</td>
                  <td>{jb.stars}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default <Market />;
