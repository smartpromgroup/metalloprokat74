import React, { createRef, MouseEventHandler, useMemo } from 'react';
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


  interface ProductTypesListProps {
    productTypes: string[];
  }

  const ProductTypesList: FC<ProductTypesListProps> = (props) => {
    const {productTypes} = props;
    return (
    <List>
    {
      productTypes.map((productType) => (
        <ListItem key={productType}>
          <ListItemText primary={productType} />
        </ListItem>))
    }
    </List>)
  }

  interface ProductProps {
    name: string;
    id: number;
  }

  const Product: FC<ProductProps> = (props) => {
    const {name, id} = props;
    const productRef = createRef<HTMLDivElement>();
    const [isPopperOpen, setIsPopperOpen] = useState(false);
    return (
      <div className="product" key={name} ref={productRef}>
      <Card className="product-card products__product-card" >
        <CardActionArea
          onClick={() => {
            setIsPopperOpen(true);
          }}
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
              component={productSvgs[id]}
              inheritViewBox={true}
              fontSize="inherit"
              sx={{ flexShrink: '1'}}
            />
            <Typography variant={!smMediaQuery ? "h6" : "h5"} sx={{ flexGrow: '1'}} >
              {name}
            </Typography>
            <SvgIcon
              component={productSvgs[id]}
              inheritViewBox={true}
              fontSize="inherit"
              sx={{flexShrink: '1'}}
            />
          </CardContent>
        </CardActionArea>
      </Card>
      <Popper
        open={isPopperOpen}
        anchorEl={() => productRef.current as HTMLElement}
        transition
      >
        {({ TransitionProps }) => (
          <ClickAwayListener
            onClickAway={(event: Event | React.SyntheticEvent) => {
              if(event.currentTarget !== productRef.current) {
                setIsPopperOpen(false);
              } 
            }}
          >
            <Fade {...TransitionProps} timeout={350}>
              <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                <ProductTypesList productTypes={productTypes[id]} />
              </Box>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </div>
    )
  } 

  interface ProductsProps {
    productNames: string[];
  }

  const Products: FC<ProductsProps> = (props) => {
    const {productNames} = props;
    return (
      <Stack
						className="products"
						spacing={5}
						sx={{ justifyContent: 'center', width: mdMediaQuery ? '50%' : '80%', margin: '0 auto' }}
					>
            {productNames.map((productName, i) => (
      <Product key={productName} name={productName} id={i} />
    ))}</Stack>)
  }

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
					<Products productNames={productNames} />
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
