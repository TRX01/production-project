import { BuildOptions } from './types/config'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevSer (options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        historyApiFallback: true,
        hot: true
    }
}
