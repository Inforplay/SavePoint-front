import { ConfigProvider } from "antd";

const AntContext = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#2b3895',
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
}

export default AntContext;