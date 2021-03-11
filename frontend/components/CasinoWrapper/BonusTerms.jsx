import React from "react";

function BonusTerms({ info }) {
  return (
    <>
      {info && (
        <>
          <div className="casino__info bigger casino__item casino__item-top">
            {info.bonuses[1] ? (
              <>
                <p>
                  <strong>
                    <span>+20</span>
                  </strong>
                </p>
                <p className="casino__info-small">free spins</p>
              </>
            ) : (
              <p>
                <strong>
                  <span>-</span>
                </strong>
              </p>
            )}
          </div>

          <div className="casino__info">
            <p>
              <strong>
                <span>x{info.bonuses[0].wager}</span>
              </strong>
            </p>
            <p className="casino__info-small">Min.wager</p>
          </div>
          <div className="casino__info">
            <p>
              <strong>
                <span>€{info.bonuses[0].minDeposit}</span>
              </strong>
            </p>
            <p className="casino__info-small">Min. deposit</p>
          </div>
          <div className="casino__info">
            <p>
              <strong>
                <span>€{info.bonuses[0].maxBet}</span>
              </strong>
            </p>
            <p className="casino__info-small">Max.bet</p>
          </div>
        </>
      )}
    </>
  );
}

export default BonusTerms;
