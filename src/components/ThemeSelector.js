import { useTheme } from '../hooks/useTheme';
import modeIcon from '../assets/img/mode-icon.svg';
import '../assets/css/ThemeSelector.css';

const themeColors = ['salmon', 'teal', 'pink'];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img 
          src={modeIcon} 
          alt="mode icon"
          onClick={toggleMode}
          style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map(color => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  )
}