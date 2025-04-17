import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { IconButton } from '@alfalab/core-components/icon-button';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Typography } from '@alfalab/core-components/typography';
import { QuestionCircleMIcon } from '@alfalab/icons-glyph/QuestionCircleMIcon';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import alfaOnly from './assets/alfa_only.png';
import baggage from './assets/baggage.png';
import cosn from './assets/cosn.png';
import rest0 from './assets/rest_0.png';
import rest12 from './assets/rest_12.png';
import rest24 from './assets/rest_24.png';
import restInf from './assets/rest_inf.png';
import switchImg from './assets/switch.png';
import taxi2 from './assets/taxi.png';
import taxi0 from './assets/taxi_0.png';
import taxi12 from './assets/taxi_12.png';
import taxi15 from './assets/taxi_15.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';
import { sendDataToGA } from './utils/events';

const dataPrices = [
  {
    month: '2 990 ₽ в месяц',
    year: (
      <>
        <s>35 880 ₽</s> <span style={{ color: '#FFD57B' }}>28 704 ₽ на год</span>
      </>
    ),
  },
  {
    month: '5 000 ₽ в месяц',
    year: (
      <>
        <s>60 000 ₽</s> <span style={{ color: '#FFD57B' }}>48 000 ₽ на год</span>
      </>
    ),
  },
  {
    month: '10 000 ₽ в месяц',
    year: (
      <>
        <s>120 000 ₽</s> <span style={{ color: '#FFD57B' }}>96 000 ₽ на год</span>
      </>
    ),
  },
  {
    month: '20 000 ₽ в месяц',
    year: (
      <>
        <s>240 000 ₽</s> <span style={{ color: '#FFD57B' }}>192 000 ₽ на год</span>
      </>
    ),
  },
];

const dataAnalytics = ['0', '2', '12', '15'];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [showBs, setShowBs] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [selected, setSelected] = useState('На 1 месяц');
  const [activeSlide, setActiveSlide] = useState(0);

  const dataPrice = dataPrices[activeSlide];

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    setLoading(true);

    sendDataToGA({
      carousel: dataAnalytics[activeSlide],
      subscription: selected === 'На 1 месяц' ? 'month' : 'year',
    }).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.logo}>
          <img src={alfaOnly} width={158} height={38} />

          <IconButton size={24} icon={<QuestionCircleMIcon />} className={appSt.logoQ} onClick={() => setShowBs(true)} />
        </div>
        <Typography.Text style={{ marginBottom: '1rem' }} view="primary-medium">
          Перейдите на новый уровень
        </Typography.Text>

        <div className={appSt.switcher}>
          <div
            className={appSt.switcherBtn({ selected: selected === 'На 1 месяц' })}
            onClick={() => setSelected('На 1 месяц')}
          >
            <Typography.Text view="primary-medium" weight="medium">
              На 1 месяц
            </Typography.Text>
          </div>
          <div className={appSt.switcherBtn({ selected: selected === 'На 1 год' })} onClick={() => setSelected('На 1 год')}>
            <Typography.Text view="primary-medium" weight="medium">
              На 1 год
            </Typography.Text>
          </div>
        </div>

        <Typography.Text view="primary-medium">
          <b>Сохраните 20%</b> с подпиской на год
        </Typography.Text>

        <div style={{ width: '100%' }}>
          <Swiper spaceBetween={8} slidesPerView="auto" onSlideChange={s => setActiveSlide(s.activeIndex)}>
            <SwiperSlide className={appSt.swSlideCalc}>
              <div className={appSt.box}>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={switchImg} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        7% кэшбэка
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        В категориях до 15 000 ₽
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={baggage} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        Страхование в путешествиях
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        Бесплатное
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={cosn} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text style={{ color: '#9D9FB8' }} view="primary-medium" tag="p" defaultMargins={false}>
                        Персональный менеджер
                      </Typography.Text>
                      <Typography.Text style={{ color: '#9D9FB8' }} view="primary-small" color="secondary">
                        Недоступно
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={rest0} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text style={{ color: '#9D9FB8' }} view="primary-medium" tag="p" defaultMargins={false}>
                        Визиты в бизнес-залы и рестораны в год
                      </Typography.Text>
                      <Typography.Text style={{ color: '#9D9FB8' }} view="primary-small" color="secondary">
                        Недоступно
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={taxi0} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text style={{ color: '#9D9FB8' }} view="primary-medium" tag="p" defaultMargins={false}>
                        Поездки на такси в год
                      </Typography.Text>
                      <Typography.Text style={{ color: '#9D9FB8' }} view="primary-small" color="secondary">
                        Недоступно
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
              </div>
            </SwiperSlide>

            <SwiperSlide className={appSt.swSlideCalc}>
              <div className={appSt.box}>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={switchImg} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        7% кэшбэка
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        В категориях до 30 000 ₽
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={baggage} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        Страхование в путешествиях
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        Бесплатное
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={cosn} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        Персональный менеджер
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        Всегда на связи
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={rest12} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        12 визитов в бизнес-залы и рестораны в год
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        Не чаще 2 раз в месяц
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={taxi2} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        2 поездки на такси в год
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        Не чаще 1 раза в месяц
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
              </div>
            </SwiperSlide>

            <SwiperSlide className={appSt.swSlideCalc}>
              <div className={appSt.box}>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={switchImg} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        7% кэшбэка
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        В категориях до 30 000 ₽
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={baggage} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        Страхование в путешествиях
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        Бесплатное
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={cosn} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        Персональный менеджер
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        Всегда на связи
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={rest24} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        24 визита в бизнес-залы и рестораны в год
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        Не чаще 8 раз в месяц
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={taxi12} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        12 поездок на такси в год
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        Не чаще 2 раз в месяц
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
              </div>
            </SwiperSlide>

            <SwiperSlide className={appSt.swSlideCalc}>
              <div className={appSt.box}>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={switchImg} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        7% кэшбэка
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        В категориях до 30 000 ₽
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={baggage} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        Страхование в путешествиях
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        Бесплатное
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={cosn} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        Персональный менеджер
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        Всегда на связи
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={restInf} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        Безлимитные посещения бизнес-залов и ресторанов
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        В любое время
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
                <PureCell>
                  <PureCell.Graphics verticalAlign="center">
                    <img src={taxi15} width={56} height={56} alt="rubd" />
                  </PureCell.Graphics>
                  <PureCell.Content>
                    <PureCell.Main>
                      <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
                        15 поездок на такси в год
                      </Typography.Text>
                      <Typography.Text view="primary-small" color="secondary">
                        Не чаще 3 раз в месяц
                      </Typography.Text>
                    </PureCell.Main>
                  </PureCell.Content>
                </PureCell>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={appSt.paginations}>
          <div className={appSt.pagination({ selected: activeSlide === 0 })} />
          <div className={appSt.pagination({ selected: activeSlide === 1 })} />
          <div className={appSt.pagination({ selected: activeSlide === 2 })} />
          <div className={appSt.pagination({ selected: activeSlide === 3 })} />
        </div>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          className={appSt.btn}
          loading={loading}
          block
          view="primary"
          size={72}
          onClick={submit}
          hint="Подключить"
        >
          {selected === 'На 1 месяц' ? dataPrice.month : dataPrice.year}
        </ButtonMobile>
      </div>

      <BottomSheet
        open={showBs}
        onClose={() => {
          setShowBs(false);
        }}
        contentClassName={appSt.btmContent}
        actionButton={
          <ButtonMobile shape="rounded" block view="primary" onClick={() => setShowBs(false)}>
            Понятно
          </ButtonMobile>
        }
      >
        <div className={appSt.containerBottom}>
          <Typography.TitleResponsive tag="h2" view="large" weight="bold">
            Рестораны и бизнес-залы
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
            Не более 20 000 ₽ в месяц.
          </Typography.Text>
          <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
            Максимальная стоимость одного визита не более 2500 ₽. Сумма свыше будет считаться как 2 визита и более.
          </Typography.Text>
          <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
            За один день (дата чека) можно компенсировать бизнес-зал ИЛИ ресторан в аэропорту.
          </Typography.Text>

          <Typography.TitleResponsive tag="h2" view="large" weight="bold">
            Такси
          </Typography.TitleResponsive>

          <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
            Максимальная стоимость поездки не более 2500 ₽. Сумма свыше будет считаться как 2 поездки.
          </Typography.Text>
        </div>
      </BottomSheet>
    </>
  );
};
