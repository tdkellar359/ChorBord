import React from 'react';
import styled from 'styled-components';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import H1 from '../../components/text/H1';
import H2 from '../../components/text/H2';
import H3 from '../../components/text/H3';
import P from '../../components/text/P';
import LinkStyled from '../../components/text/LinkStyled';

const MarketWrapper = styled.div`
  & h3 {
    color: ${(props) => props.theme.secondaryDark || props.theme.primaryDark};
  }
`;

const IconFlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & .IconFlexBoxItem {
    flex: 0 1 auto;
    margin: 0.5em;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class Market extends React.Component {
  render() {
    return (
      <MarketWrapper>
        <H1>Market</H1>
        <P>
          Welcome to the ChorBord market! Here you can buy, sell, and trade awards
          with other members of your house. If you would like to contribue a custom
          award to the market, follow the instuctions&nbsp;
          <LinkStyled to="/store/uploads">here</LinkStyled>
          .
        </P>

        <H2>Buy</H2>
        <P>
          Here, you can browse all of the awards that are up for purchase. Some may be
          for sale through the market while others may have been posted by another member
          of your house.
        </P>
        <H3>Common</H3>
        <IconFlexBox>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
        </IconFlexBox>

        <H3>Rare</H3>
        <IconFlexBox>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
        </IconFlexBox>

        <H3>Legendary</H3>
        <IconFlexBox>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
          <div className="IconFlexBoxItem">
            <EmojiFoodBeverageIcon />
          </div>
        </IconFlexBox>

        <H2>Sell</H2>
        <P>
          Choose an award to sell and set a price. We&apos;ll let you know if you have
          any buyers.
        </P>

        <H2>Trade</H2>
        <P>
          Propose a trade with another member of your house. If they accept the trade,
          the transaction will be completed automatically. Otherwise, they might send back
          a counter-offer!
        </P>
      </MarketWrapper>
    );
  }
}

export default Market;
