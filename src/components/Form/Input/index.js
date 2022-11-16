import styles from './Input.module.css';

const Input = ({type, name, handleChange, label, value, onChange, error, onBlur}) => {
    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <input 
                id={name} 
                className={styles.input} 
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange}
                onBlur={onBlur}
            />
            { error && <p className={styles.error}>{error}</p> }
        </div>
    );
}
 
export default Input;