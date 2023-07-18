import React, { ReactNode } from "react";
interface Props{
    children?:ReactNode
}
interface State{
    hasError:boolean;
}
class ErrorBoundary extends React.Component<Props,State>{
    public state:State={
        hasError:false
    };
    public static getDerivedStateFromError(_:Error):State{
        return {hasError:true}
    }
    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("Uncaught error",error,errorInfo)
    }
    public render(){
        if(this.state.hasError){
            return <h1>Sorry this is a error</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundary;