const sizes = {
	xxs: "539px",
	xs: "575.98px",
	sm: "769.98px",
	md: "991.08px",
	lg: "1199.98px",
	xl: "1600px"
}

export default {
	up(size){
		return `@media (min-width: ${sizes[size]})`
	},
	
	down(size){
		return `@media (max-width: ${sizes[size]})`
	}
}