import React from 'react';
import './App.css';
import Button from '@mui/material/Button'
import { createTheme, Grid, Link, Palette, PaletteColorOptions, PaletteOptions, Popover, responsiveFontSizes, SimplePaletteColorOptions, SvgIcon, Theme, ThemeOptions, ThemeProvider, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FC, useState } from 'react';
import { ReactComponent as PipesSvg } from './media/images/pipes.svg';
import { ReactComponent as SheetSvg } from './media/images/sheet.svg';
import { ReactComponent as ChannelSvg } from './media/images/channel.svg';
import { ReactComponent as CornerSvg } from './media/images/corner.svg';
import { ReactComponent as BeamSvg } from './media/images/beam.svg';
import { ReactComponent as FittingsSvg } from './media/images/fittings.svg';
import { ReactComponent as WireSvg } from './media/images/wire.svg';
import { ReactComponent as RoundSvg } from './media/images/round.svg';
import { ReactComponent as HexagonSvg } from './media/images/hexagon.svg';
import { ReactComponent as SquareSvg } from './media/images/square.svg';
import { ReactComponent as StripSvg } from './media/images/strip.svg';
import { ReactComponent as RailsSvg } from './media/images/rails.svg';
import { ReactComponent as MeshSvg } from './media/images/mesh.svg';
import './main.scss';
import { blue, red } from '@mui/material/colors';



const App: FC = () => {
  const pageName = "main-page"

  const [pipesAnchor, setPipesAnchor] = useState<HTMLElement | null>(null);
  const [sheetAnchor, setSheetAnchor] = useState<HTMLElement | null>(null);
  const [channelAnchor, setChannelAnchor] = useState<HTMLElement | null>(null);
  const [cornerAnchor, setCornerAnchor] = useState<HTMLElement | null>(null);
  const [beamAnchor, setBeamAnchor] = useState<HTMLElement | null>(null);
  const [fittingsAnchor, setFittingsAnchor] = useState<HTMLElement | null>(null);
  const [wireAnchor, setWireAnchor] = useState<HTMLElement | null>(null);
  const [roundAnchor, setRoundAnchor] = useState<HTMLElement | null>(null);
  const [hexatonAnchor, setHexatonAnchor] = useState<HTMLElement | null>(null);
  const [squareAnchor, setSquareAnchor] = useState<HTMLElement | null>(null);
  const [stripAnchor, setStripAnchor] = useState<HTMLElement | null>(null);
  const [railsAnchor, setRailsAnchor] = useState<HTMLElement | null>(null);
  const [forgingAnchor, setForgingAnchor] = useState<HTMLElement | null>(null);
  const [meshAnchor, setMeshAnchor] = useState<HTMLElement | null>(null);

  interface DefaultPaletteOptions extends PaletteOptions {
    primary?: SimplePaletteColorOptions;
    secondary?: SimplePaletteColorOptions;
  }
  
  const palette: DefaultPaletteOptions =  {
      primary: {
        main: '#494942',
        light: '#75746d',
        dark: '#22221b',
      },
      secondary: {
        main: '#eceff1',
        light: '#ffffff',
        dark: '#babdbe',
      },
      text: {
        primary: '#ffffff',
        secondary: '#000000',
      },
      action: {
        active: blue[400]
      }
    };

  let theme = createTheme({
    palette: palette,
    typography: {
      allVariants: {
        color: palette.text?.primary
      }
    },
    components: {
      MuiPopover: {
        styleOverrides: {
          paper: {
            backgroundColor: palette.secondary?.main,
            color: red[200]
          },
          root: {
            color: red[200],
          },
        }
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: palette.action?.active
          }
        }
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            color: palette.text?.secondary
          }
        }
      }
    },
  });

  theme = responsiveFontSizes(theme, {

  });
  


  const getPopoverOnClickListenerToSetAnchor = (setter: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => {
    var listener: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      setter(event.currentTarget);
    }
    return listener;
  }

  const getPopoverOnCloseListener = (setter: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => {
    return () => {
      setter(null);
    }
  }



  return (
    <ThemeProvider theme={theme}>
    <div className="app">
      <div className="background" />
      <Typography variant='h1' className={`header1 ${pageName}__header1`} mb="50px" sx={{
        fontSize: {
          xs: '2rem',
          sm: '3rem',
          md: '4rem',
          lg: '5rem',
          xl: '6rem'
        }
      }}>
        Металлопрокат в Челябинске
      </Typography>
      <main>
        <Grid container className="products" spacing={2}>
          <Grid item xs >
            <Button
              size='large'
              className='products__button'
              startIcon={<SvgIcon component={PipesSvg} inheritViewBox={true} />}
              variant='contained'
              onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}
            >
              <Typography>
                Трубы
              </Typography>
            </Button>
            <Popover
              open={Boolean(pipesAnchor)}
              onClose={getPopoverOnCloseListener(setPipesAnchor)}
              anchorEl={pipesAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Водогазопроводные"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Электросварная" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Профильные" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Бесшовные" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Нержавеющие" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Котельные" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              className='products__button'
              startIcon={<SvgIcon component={SheetSvg} inheritViewBox={true} />}
              variant='contained'
              onClick={getPopoverOnClickListenerToSetAnchor(setSheetAnchor)}
            >
              <Typography>Листы</Typography>
            </Button>
            <Popover
              open={Boolean(sheetAnchor)}
              onClose={getPopoverOnCloseListener(setSheetAnchor)}
              anchorEl={sheetAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Горячетканные" 
                   />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Холоднотканые" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Рифлёные" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="ПВЛ" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Нержавеющие" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Оцинкованные" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              variant='contained'
              startIcon={<SvgIcon component={ChannelSvg} inheritViewBox={true} />}
              onClick={getPopoverOnClickListenerToSetAnchor(setChannelAnchor)}
            >
              <Typography>Швеллера</Typography>
            </Button>
            <Popover
              open={Boolean(channelAnchor)}
              onClose={getPopoverOnCloseListener(setChannelAnchor)}
              anchorEl={channelAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Обычный" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Гнутый" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              variant='contained'
              startIcon={<SvgIcon component={CornerSvg} inheritViewBox={true} />}
              onClick={getPopoverOnClickListenerToSetAnchor(setCornerAnchor)}
            >
              <Typography>Уголок</Typography>
            </Button>
            <Popover
              open={Boolean(cornerAnchor)}
              onClose={getPopoverOnCloseListener(setCornerAnchor)}
              anchorEl={cornerAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Равнополочный" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Неравнополочный" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              variant='contained'
              startIcon={<SvgIcon component={BeamSvg} inheritViewBox={true} />}
              onClick={getPopoverOnClickListenerToSetAnchor(setBeamAnchor)}
            >
              <Typography>Балка</Typography>
            </Button>
            <Popover
              open={Boolean(beamAnchor)}
              onClose={getPopoverOnCloseListener(setBeamAnchor)}
              anchorEl={beamAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Двутавровая" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              variant='contained'
              startIcon={<SvgIcon component={WireSvg} inheritViewBox={true} />}
              onClick={getPopoverOnClickListenerToSetAnchor(setWireAnchor)}
            >
              <Typography>Проволока</Typography>
            </Button>
            <Popover
              open={Boolean(wireAnchor)}
              onClose={getPopoverOnCloseListener(setWireAnchor)}
              anchorEl={wireAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Стальная" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Оцинкованная" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Нержавеющая" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Плетёная рабица" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              variant='contained'
              startIcon={<SvgIcon component={FittingsSvg} inheritViewBox={true} />}
              onClick={getPopoverOnClickListenerToSetAnchor(setFittingsAnchor)}
            >
              <Typography>Арматура</Typography>
            </Button>
            <Popover
              open={Boolean(fittingsAnchor)}
              onClose={getPopoverOnCloseListener(setFittingsAnchor)}
              anchorEl={fittingsAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="А1" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="А3" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              variant='contained'
              startIcon={<SvgIcon component={WireSvg} inheritViewBox={true} />}
              onClick={getPopoverOnClickListenerToSetAnchor(setRoundAnchor)}
            >
              <Typography>Проволока</Typography>
            </Button>
            <Popover
              open={Boolean(roundAnchor)}
              onClose={getPopoverOnCloseListener(setRoundAnchor)}
              anchorEl={roundAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Стальной" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Нержавеющий" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              variant='contained'
              startIcon={<SvgIcon component={RoundSvg} inheritViewBox={true} />}
              onClick={getPopoverOnClickListenerToSetAnchor(setRoundAnchor)}
            >
              <Typography>Круг</Typography>
            </Button>
            <Popover
              open={Boolean(roundAnchor)}
              onClose={getPopoverOnCloseListener(setRoundAnchor)}
              anchorEl={roundAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Стальной" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Нержавеющий" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              variant='contained'
              startIcon={<SvgIcon component={HexagonSvg} inheritViewBox={true} />}
              onClick={getPopoverOnClickListenerToSetAnchor(setHexatonAnchor)}
            >
              <Typography>Шестиугольник</Typography>
            </Button>
            <Popover
              open={Boolean(hexatonAnchor)}
              onClose={getPopoverOnCloseListener(setHexatonAnchor)}
              anchorEl={hexatonAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Стальной" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Нержавеющий" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              variant='contained'
              startIcon={<SvgIcon component={SquareSvg} inheritViewBox={true} />}
              onClick={getPopoverOnClickListenerToSetAnchor(setSquareAnchor)}
            >
              <Typography>Квадрат</Typography>
            </Button>
            <Popover
              open={Boolean(squareAnchor)}
              onClose={getPopoverOnCloseListener(setSquareAnchor)}
              anchorEl={squareAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Стальной" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Нержавеющий" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              variant='contained'
              startIcon={<SvgIcon component={StripSvg} inheritViewBox={true} />}
              onClick={getPopoverOnClickListenerToSetAnchor(setStripAnchor)}
            >
              <Typography>Полоса</Typography>
            </Button>
            <Popover
              open={Boolean(stripAnchor)}
              onClose={getPopoverOnCloseListener(setStripAnchor)}
              anchorEl={stripAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Горячетканая" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Холоднотканая" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              variant='contained'
              startIcon={<SvgIcon component={RailsSvg} inheritViewBox={true} />}
              onClick={getPopoverOnClickListenerToSetAnchor(setRailsAnchor)}
            >
              <Typography>Рельсы</Typography>
            </Button>
            <Popover
              open={Boolean(railsAnchor)}
              onClose={getPopoverOnCloseListener(setRailsAnchor)}
              anchorEl={railsAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Крановые" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Для широкой колеи" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Для узкой колеи" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              variant='contained'
              startIcon={<SvgIcon component={RoundSvg} inheritViewBox={true} />}
              onClick={getPopoverOnClickListenerToSetAnchor(setForgingAnchor)}
            >
              <Typography>Поковка</Typography>
            </Button>
            <Popover
              open={Boolean(forgingAnchor)}
              onClose={getPopoverOnCloseListener(setForgingAnchor)}
              anchorEl={forgingAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Круглая" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Квадратная" />
                </ListItem>
              </List>
            </Popover>
          </Grid>

          <Grid item xs >
            <Button
              size='large'
              variant='contained'
              startIcon={<SvgIcon component={MeshSvg} inheritViewBox={true} />}
              onClick={getPopoverOnClickListenerToSetAnchor(setMeshAnchor)}
            >
              <Typography>Сетка</Typography>
            </Button>
            <Popover
              open={Boolean(meshAnchor)}
              onClose={getPopoverOnCloseListener(setMeshAnchor)}
              anchorEl={meshAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <List>
                <ListItem>
                  <ListItemText primary="Сварная" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Тканая" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Нержавеющая" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Плетёная рабица" />
                </ListItem>
              </List>
            </Popover>
          </Grid>
        </Grid> 
        <Typography className={`header2 ${pageName}__header2`} variant='h2'>
          Контакты
        </Typography>
        <div className={`phone-numbers ${pageName}__phone-numbers`}>
          <Link href="tel:+79068666065" className='phone-number phone-numbers__phone-number' variant='body1'>
            +79068666065
          </Link>
          <Link href="tel:+79090893378" className='phone-number phone-numbers__phone-number' variant='body1'>
            +79090893378
          </Link>
        </div>
        <div className={`emails ${pageName}__emails`}>
          <Link href='mailto:Omarova.spg@gmail.com' className='email emails__email' variant='body1'>
            Omarova.spg@gmail.com
          </Link>
        </div>
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
