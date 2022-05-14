import React, { MouseEventHandler } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	ClickAwayListener,
	ClickAwayListenerProps,
	createTheme,
	Fade,
	Link,
	Palette,
	PaletteColorOptions,
	PaletteOptions,
	Popover,
	Popper,
	responsiveFontSizes,
	SimplePaletteColorOptions,
	Stack,
	SvgIcon,
	Theme,
	ThemeOptions,
	ThemeProvider,
	Typography,
  useMediaQuery,
} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FC, useState } from 'react';
import { ReactComponent as PipesSvg } from './media/images/pipes.svg';
import { ReactComponent as SheetsSvg } from './media/images/sheet.svg';
import { ReactComponent as ChannelsSvg } from './media/images/channel.svg';
import { ReactComponent as CornersSvg } from './media/images/corner.svg';
import { ReactComponent as BeamsSvg } from './media/images/beam.svg';
import { ReactComponent as FittingsSvg } from './media/images/fittings.svg';
import { ReactComponent as WiresSvg } from './media/images/wire.svg';
import { ReactComponent as RoundsSvg } from './media/images/round.svg';
import { ReactComponent as HexagonsSvg } from './media/images/hexagon.svg';
import { ReactComponent as SquaresSvg } from './media/images/square.svg';
import { ReactComponent as StripsSvg } from './media/images/strip.svg';
import { ReactComponent as RailsSvg } from './media/images/rails.svg';
import { ReactComponent as ForgingSvg } from './media/images/round.svg';
import { ReactComponent as MeshesSvg } from './media/images/mesh.svg';
import './main.scss';
import { blue, red } from '@mui/material/colors';
import { fontSize } from '@mui/system';

const App: FC = () => {
	const pageName = 'main-page';

	const [pipesAnchor, setPipesAnchor] = useState<HTMLElement | null>(null);
	const [sheetsAnchor, setSheetsAnchor] = useState<HTMLElement | null>(null);
	const [channelsAnchor, setChannelsAnchor] = useState<HTMLElement | null>(
		null
	);
	const [cornersAnchor, setCornersAnchor] = useState<HTMLElement | null>(null);
	const [beamsAnchor, setBeamsAnchor] = useState<HTMLElement | null>(null);
	const [fittingsAnchor, setFittingsAnchor] = useState<HTMLElement | null>(
		null
	);
	const [wiresAnchor, setWiresAnchor] = useState<HTMLElement | null>(null);
	const [roundsAnchor, setRoundsAnchor] = useState<HTMLElement | null>(null);
	const [hexagonsAnchor, setHexagonsAnchor] = useState<HTMLElement | null>(
		null
	);
	const [squaresAnchor, setSquaresAnchor] = useState<HTMLElement | null>(null);
	const [stripsAnchor, setStripsAnchor] = useState<HTMLElement | null>(null);
	const [railsAnchor, setRailsAnchor] = useState<HTMLElement | null>(null);
	const [forgingAnchor, setForgingAnchor] = useState<HTMLElement | null>(null);
	const [meshesAnchor, setMeshesAnchor] = useState<HTMLElement | null>(null);

	interface DefaultPaletteOptions extends PaletteOptions {
		primary?: SimplePaletteColorOptions;
		secondary?: SimplePaletteColorOptions;
	}

	const palette: DefaultPaletteOptions = {
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
			active: blue[400],
		},
	};

	let theme = createTheme({
		palette: palette,
		typography: {
			allVariants: {
				color: palette.text?.primary,
			},
		},
		components: {
			MuiPopover: {
				styleOverrides: {
					paper: {
						backgroundColor: palette.secondary?.main,
						color: red[200],
					},
					root: {
						color: red[200],
					},
				},
			},
			MuiLink: {
				styleOverrides: {
					root: {
						color: palette.action?.active,
					},
				},
			},
			MuiListItemText: {
				styleOverrides: {
					primary: {
						color: palette.text?.secondary,
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						backgroundColor: palette.primary?.main,
					},
				},
			}
		},
	});

	theme = responsiveFontSizes(theme, {});

  
  const xsMediaQuery = useMediaQuery(theme.breakpoints.up('xs'));
  const smMediaQuery = useMediaQuery(theme.breakpoints.up('sm'));
  const mdMediaQuery = useMediaQuery(theme.breakpoints.up('md'));

	const getPopoverOnClickListenerToSetAnchor = (
		setter: React.Dispatch<React.SetStateAction<HTMLElement | null>>
	) => {
		var listener: React.MouseEventHandler<HTMLButtonElement> = (event) => {
			setter(event.currentTarget);
		};
		return listener;
	};

	const getPopperOnClickAwayListener = (
    anchor: HTMLElement | null,
		setter: React.Dispatch<React.SetStateAction<HTMLElement | null>>
	) => {
    var listener = (event: Event | React.SyntheticEvent) => {
      if(event.currentTarget !== anchor) {
        setter(null);
      } 
    }
		return listener;
	};

	const productNames = [
		'ТРУБЫ',
		'ЛИСТЫ',
		'ШВЕЛЛЕРЫ',
		'УГОЛОКИ',
		'БАЛКИ',
		'АРМАТУРЫ',
		'ПРОВОЛОКА',
		'КРУГИ',
		'ШЕСТИГРАННИКИ',
		'КВАДРАТЫ',
		'ПОЛОСЫ',
		'РЕЛЬСЫ',
		'ПОКОВКА',
		'СЕТКИ',
	];

	const productSvgs = [
		PipesSvg,
		SheetsSvg,
		ChannelsSvg,
		CornersSvg,
		BeamsSvg,
		FittingsSvg,
		WiresSvg,
		RoundsSvg,
		HexagonsSvg,
		SquaresSvg,
		StripsSvg,
		RailsSvg,
    ForgingSvg,
		MeshesSvg,
	];

	const pipeTypes = [
		'Водогазопроводные',
		'Электросварная',
		'Профильные',
		'Бесшовные',
		'Нержавеющие',
		'Котельные',
	];
	const sheetTypes = [
		'Горячетканные',
		'Холоднотканые',
		'Рифлёные',
		'ПВЛ',
		'Нержавеющие',
		'Оцинкованные',
	];
	const channelTypes = ['Обычные', 'Гнутые'];
	const cornerTypes = ['Равнополочные', 'Неравнополочные'];
	const beamTypes = ['Двутавровые'];
	const fittingTypes = [
		'Стальные',
		'Оцинкованные',
		'Нержавеющие',
		'Плетёная рабица',
	];
	const wireTypes = ['Стальная', 'Оцинкованная', 'Нержавеющая', 'Нихромовая'];
	const roundTypes = ['Стальные', 'Нержавеющие'];
	const hexagonTypes = ['Стальные', 'Нержавеющие'];
	const squareTypes = ['Стальные', 'Нержавеющие'];
	const stripTypes = ['Горячетканные', 'Холоднотканные'];
	const railsTypes = ['Крановые', 'Для широкой колеи', 'Для узкой колеи'];
	const forgingTypes = ['Круглая', 'Квадратная'];
	const meshTypes = ['Сварные', 'Тканые', 'Нержавеющие', 'Плетёная рабица'];

	const productTypes = [
		pipeTypes,
		sheetTypes,
		channelTypes,
		cornerTypes,
		beamTypes,
		fittingTypes,
		wireTypes,
		roundTypes,
		hexagonTypes,
		squareTypes,
		stripTypes,
		railsTypes,
		forgingTypes,
		meshTypes,
	];

	const productPopperAnchorGetters = [ () => pipesAnchor, () => sheetsAnchor, () => channelsAnchor, () => cornersAnchor, () => beamsAnchor, () => fittingsAnchor, () => wiresAnchor, () => roundsAnchor, () => hexagonsAnchor, () => squaresAnchor, () => stripsAnchor, () => railsAnchor, () => forgingAnchor, () => meshesAnchor ];

	const productPopperAnchorSetters = [
		setPipesAnchor,
		setSheetsAnchor,
		setChannelsAnchor,
		setCornersAnchor,
		setBeamsAnchor,
		setFittingsAnchor,
		setWiresAnchor,
		setRoundsAnchor,
		setHexagonsAnchor,
		setSquaresAnchor,
		setStripsAnchor,
		setRailsAnchor,
		setForgingAnchor,
		setMeshesAnchor,
	];



	return (
		<ThemeProvider theme={theme}>
			<div className="app">
				<div className="background" />
				<Box className="title" sx={{display: 'flex', gap: '0.8rem', flexDirection: mdMediaQuery ? 'row' : 'column'}}>
					<img src={process.env.PUBLIC_URL + '/icon-144x144.png'} />
					<Typography
						variant="h1"
						className={`header1 ${pageName}__header1`}
						sx={{
							fontSize: {
								xs: '2rem',
								sm: '3rem',
								md: '3rem',
								lg: '4rem',
								xl: '6rem',
							},
						}}
					>
						Металлопрокат в Челябинске
					</Typography>
				</Box>

				<main>
					<Stack
						className="products"
						spacing={5}
						sx={{ justifyContent: 'center', width: mdMediaQuery ? '50%' : '80%', margin: '0 auto' }}
					>
						{productNames.map((productName, i) => (
							<div className="product">
								<Card className="product-card products__product-card">
									<CardActionArea
										onClick={getPopoverOnClickListenerToSetAnchor(
											productPopperAnchorSetters[i]
										)}
									>
										<CardContent
											sx={{
												display: 'flex',
												alignItems: 'center',
												textAlign: 'center',
                        fontSize: '55px',
                        gap: '0.5rem',
											}}
										>
											<SvgIcon
												component={productSvgs[i]}
												inheritViewBox={true}
												fontSize="inherit"
                        sx={{ flexShrink: '1'}}
											/>
											<Typography variant={!smMediaQuery ? "h6" : "h5"} sx={{ flexGrow: '1'}} >
												{productName}
											</Typography>
											<SvgIcon
												component={productSvgs[i]}
												inheritViewBox={true}
												fontSize="inherit"
                        sx={{flexShrink: '1'}}
											/>
										</CardContent>
									</CardActionArea>
								</Card>
								<Popper
									open={Boolean(productPopperAnchorGetters[i]())}
									anchorEl={productPopperAnchorGetters[i]()}
									transition
								>
									{({ TransitionProps }) => (
										<ClickAwayListener
											onClickAway={getPopperOnClickAwayListener(productPopperAnchorGetters[i](), productPopperAnchorSetters[i])}
										>
											<Fade {...TransitionProps} timeout={350}>
												<Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                        <List>
													{productTypes[i].map((productType) => (
														<ListItem>
															<ListItemText primary={productType} />
														</ListItem>
													))}
												</List>
                        </Box>
											</Fade>
										</ClickAwayListener>
									)}
								</Popper>
							</div>
						))}

						{/* <div className="product">
          <Card className='product-card products__product-card'>
              <CardActionArea onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}>
                  <CardContent sx={{ display: "flex", alignItems: "center", textAlign: "center", fontSize: theme.typography.h2.fontSize?.toString()}}>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                    <Typography variant='h2' sx={{flexGrow: "1"}}>
                    Листы
                    </Typography>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                  </CardContent>
              </CardActionArea>
            </Card>
            <Popper
              open={Boolean(pipesAnchor)}
              anchorEl={pipesAnchor}
              transition
            >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={getPopoverOnCloseListener(setPipesAnchor)}>
                  <Fade {...TransitionProps} timeout={350}>
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
                  </Fade>
                  </ClickAwayListener>
                )}
               
            </Popper>
          </div>

          <div className="product">
          <Card className='product-card products__product-card'>
              <CardActionArea onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}>
                  <CardContent sx={{ display: "flex", alignItems: "center", textAlign: "center", fontSize: theme.typography.h2.fontSize?.toString()}}>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                    <Typography variant='h2' sx={{flexGrow: "1"}}>
                    Швеллера
                    </Typography>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                  </CardContent>
              </CardActionArea>
            </Card>
            <Popper
              open={Boolean(pipesAnchor)}
              anchorEl={pipesAnchor}
              transition
            >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={getPopoverOnCloseListener(setPipesAnchor)}>
                  <Fade {...TransitionProps} timeout={350}>
                  <List>
                <ListItem>
                  <ListItemText primary="Обычный" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Гнутый" />
                </ListItem>
              </List>
                  </Fade>
                  </ClickAwayListener>
                )}
               
            </Popper>
          </div>

          <div className="product">
          <Card className='product-card products__product-card'>
              <CardActionArea onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}>
                  <CardContent sx={{ display: "flex", alignItems: "center", textAlign: "center", fontSize: theme.typography.h2.fontSize?.toString()}}>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                    <Typography variant='h2' sx={{flexGrow: "1"}}>
                    Уголок
                    </Typography>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                  </CardContent>
              </CardActionArea>
            </Card>
            <Popper
              open={Boolean(pipesAnchor)}
              anchorEl={pipesAnchor}
              transition
            >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={getPopoverOnCloseListener(setPipesAnchor)}>
                  <Fade {...TransitionProps} timeout={350}>
                  <List>
                <ListItem>
                  <ListItemText primary="Равнополочный" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Неравнополочный" />
                </ListItem>
              </List>
                  </Fade>
                  </ClickAwayListener>
                )}
               
            </Popper>
          </div>

          <div className="product">
          <Card className='product-card products__product-card'>
              <CardActionArea onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}>
                  <CardContent sx={{ display: "flex", alignItems: "center", textAlign: "center", fontSize: theme.typography.h2.fontSize?.toString()}}>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                    <Typography variant='h2' sx={{flexGrow: "1"}}>
                    Балка
                    </Typography>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                  </CardContent>
              </CardActionArea>
            </Card>
            <Popper
              open={Boolean(pipesAnchor)}
              anchorEl={pipesAnchor}
              transition
            >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={getPopoverOnCloseListener(setPipesAnchor)}>
                  <Fade {...TransitionProps} timeout={350}>
                  <List>
                <ListItem>
                  <ListItemText primary="Двутавровая" />
                </ListItem>
              </List>
                  </Fade>
                  </ClickAwayListener>
                )}
               
            </Popper>
          </div>

          <div className="product">
          <Card className='product-card products__product-card'>
              <CardActionArea onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}>
                  <CardContent sx={{ display: "flex", alignItems: "center", textAlign: "center", fontSize: theme.typography.h2.fontSize?.toString()}}>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                    <Typography variant='h2' sx={{flexGrow: "1"}}>
                    Проволока
                    </Typography>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                  </CardContent>
              </CardActionArea>
            </Card>
            <Popper
              open={Boolean(pipesAnchor)}
              anchorEl={pipesAnchor}
              transition
            >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={getPopoverOnCloseListener(setPipesAnchor)}>
                  <Fade {...TransitionProps} timeout={350}>
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
                  </Fade>
                  </ClickAwayListener>
                )}
               
            </Popper>
          </div>

          <div className="product">
          <Card className='product-card products__product-card'>
              <CardActionArea onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}>
                  <CardContent sx={{ display: "flex", alignItems: "center", textAlign: "center", fontSize: theme.typography.h2.fontSize?.toString()}}>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                    <Typography variant='h2' sx={{flexGrow: "1"}}>
                    Арматура
                    </Typography>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                  </CardContent>
              </CardActionArea>
            </Card>
            <Popper
              open={Boolean(pipesAnchor)}
              anchorEl={pipesAnchor}
              transition
            >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={getPopoverOnCloseListener(setPipesAnchor)}>
                  <Fade {...TransitionProps} timeout={350}>
                  <List>
                <ListItem>
                  <ListItemText primary="А1" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="А3" />
                </ListItem>
              </List>
                  </Fade>
                  </ClickAwayListener>
                )}
               
            </Popper>
          </div>

          <div className="product">
          <Card className='product-card products__product-card'>
              <CardActionArea onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}>
                  <CardContent sx={{ display: "flex", alignItems: "center", textAlign: "center", fontSize: theme.typography.h2.fontSize?.toString()}}>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                    <Typography variant='h2' sx={{flexGrow: "1"}}>
                    Проволока
                    </Typography>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                  </CardContent>
              </CardActionArea>
            </Card>
            <Popper
              open={Boolean(pipesAnchor)}
              anchorEl={pipesAnchor}
              transition
            >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={getPopoverOnCloseListener(setPipesAnchor)}>
                  <Fade {...TransitionProps} timeout={350}>
                  <List>
                <ListItem>
                  <ListItemText primary="Стальной" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Нержавеющий" />
                </ListItem>
              </List>
                  </Fade>
                  </ClickAwayListener>
                )}
               
            </Popper>
          </div>

          <div className="product">
          <Card className='product-card products__product-card'>
              <CardActionArea onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}>
                  <CardContent sx={{ display: "flex", alignItems: "center", textAlign: "center", fontSize: theme.typography.h2.fontSize?.toString()}}>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                    <Typography variant='h2' sx={{flexGrow: "1"}}>
                    Круг
                    </Typography>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                  </CardContent>
              </CardActionArea>
            </Card>
            <Popper
              open={Boolean(pipesAnchor)}
              anchorEl={pipesAnchor}
              transition
            >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={getPopoverOnCloseListener(setPipesAnchor)}>
                  <Fade {...TransitionProps} timeout={350}>
                  <List>
                <ListItem>
                  <ListItemText primary="Стальной" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Нержавеющий" />
                </ListItem>
              </List>
                  </Fade>
                  </ClickAwayListener>
                )}
               
            </Popper>
          </div>

          <div className="product">
          <Card className='product-card products__product-card'>
              <CardActionArea onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}>
                  <CardContent sx={{ display: "flex", alignItems: "center", textAlign: "center", fontSize: theme.typography.h2.fontSize?.toString()}}>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                    <Typography variant='h2' sx={{flexGrow: "1"}}>
                    Шестиугольник
                    </Typography>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                  </CardContent>
              </CardActionArea>
            </Card>
            <Popper
              open={Boolean(pipesAnchor)}
              anchorEl={pipesAnchor}
              transition
            >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={getPopoverOnCloseListener(setPipesAnchor)}>
                  <Fade {...TransitionProps} timeout={350}>
                  <List>
                <ListItem>
                  <ListItemText primary="Стальной" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Нержавеющий" />
                </ListItem>
              </List>
                  </Fade>
                  </ClickAwayListener>
                )}
               
            </Popper>
          </div>

          <div className="product">
          <Card className='product-card products__product-card'>
              <CardActionArea onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}>
                  <CardContent sx={{ display: "flex", alignItems: "center", textAlign: "center", fontSize: theme.typography.h2.fontSize?.toString()}}>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                    <Typography variant='h2' sx={{flexGrow: "1"}}>
                    Квадрат
                    </Typography>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                  </CardContent>
              </CardActionArea>
            </Card>
            <Popper
              open={Boolean(pipesAnchor)}
              anchorEl={pipesAnchor}
              transition
            >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={getPopoverOnCloseListener(setPipesAnchor)}>
                  <Fade {...TransitionProps} timeout={350}>
                  <List>
                <ListItem>
                  <ListItemText primary="Стальной" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Нержавеющий" />
                </ListItem>
              </List>
                  </Fade>
                  </ClickAwayListener>
                )}
               
            </Popper>
          </div>

          <div className="product">
          <Card className='product-card products__product-card'>
              <CardActionArea onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}>
                  <CardContent sx={{ display: "flex", alignItems: "center", textAlign: "center", fontSize: theme.typography.h2.fontSize?.toString()}}>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                    <Typography variant='h2' sx={{flexGrow: "1"}}>
                    Полоса
                    </Typography>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                  </CardContent>
              </CardActionArea>
            </Card>
            <Popper
              open={Boolean(pipesAnchor)}
              anchorEl={pipesAnchor}
              transition
            >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={getPopoverOnCloseListener(setPipesAnchor)}>
                  <Fade {...TransitionProps} timeout={350}>
                  <List>
                <ListItem>
                  <ListItemText primary="Горячетканая" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Холоднотканая" />
                </ListItem>
              </List>
                  </Fade>
                  </ClickAwayListener>
                )}
               
            </Popper>
          </div>

          <div className="product">
          <Card className='product-card products__product-card'>
              <CardActionArea onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}>
                  <CardContent sx={{ display: "flex", alignItems: "center", textAlign: "center", fontSize: theme.typography.h2.fontSize?.toString()}}>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                    <Typography variant='h2' sx={{flexGrow: "1"}}>
                    Рельсы
                    </Typography>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                  </CardContent>
              </CardActionArea>
            </Card>
            <Popper
              open={Boolean(pipesAnchor)}
              anchorEl={pipesAnchor}
              transition
            >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={getPopoverOnCloseListener(setPipesAnchor)}>
                  <Fade {...TransitionProps} timeout={350}>
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
                  </Fade>
                  </ClickAwayListener>
                )}
               
            </Popper>
          </div>

          <div className="product">
          <Card className='product-card products__product-card'>
              <CardActionArea onClick={getPopoverOnClickListenerToSetAnchor(setPipesAnchor)}>
                  <CardContent sx={{ display: "flex", alignItems: "center", textAlign: "center", fontSize: theme.typography.h2.fontSize?.toString()}}>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                    <Typography variant='h2' sx={{flexGrow: "1"}}>
                    Поковка
                    </Typography>
                    <SvgIcon component={PipesSvg} inheritViewBox={true} fontSize='inherit' />
                  </CardContent>
              </CardActionArea>
            </Card>
            <Popper
              open={Boolean(pipesAnchor)}
              anchorEl={pipesAnchor}
              transition
            >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={getPopoverOnCloseListener(setPipesAnchor)}>
                  <Fade {...TransitionProps} timeout={350}>
                  <List>
                <ListItem>
                  <ListItemText primary="Круглая" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Квадратная" />
                </ListItem>
              </List>
                  </Fade>
                  </ClickAwayListener>
                )}
               
            </Popper>
          </div>

          <div className="product">
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
          </div> */}
					</Stack>
					<Typography className={`header2 ${pageName}__header2`} variant="h2">
						Контакты
					</Typography>
					<div className={`phone-numbers ${pageName}__phone-numbers`}>
						<Link
							href="tel:+79068666065"
							className="phone-number phone-numbers__phone-number"
							variant="body1"
						>
							+79068666065
						</Link>
						<Link
							href="tel:+79090893378"
							className="phone-number phone-numbers__phone-number"
							variant="body1"
						>
							+79090893378
						</Link>
					</div>
					<div className={`emails ${pageName}__emails`}>
						<Link
							href="mailto:Omarova.spg@gmail.com"
							className="email emails__email"
							variant="body1"
						>
							Omarova.spg@gmail.com
						</Link>
					</div>
				</main>
			</div>
		</ThemeProvider>
	);
};

export default App;
