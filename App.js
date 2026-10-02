import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.pantalla}>
      <View style={styles.marcoTerminal}>
        <View style={styles.barraSuperior}>
          <View style={styles.punto} />
          <View style={styles.punto} />
          <View style={styles.punto} />
        </View>

        <View style={styles.contenido}>
          <Text style={styles.textoLucy}>L U C Y</Text>
          <Text style={styles.subtitulo}>Sistema listo • v1.0.0</Text>
          <Text style={styles.linea}>Cargando módulos completados...</Text>
          <Text style={styles.linea}>Interfaz activa en modo terminal</Text>
          <Text style={styles.linea}>Conectado al núcleo</Text>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#05050a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  marcoTerminal: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#0c0c14',
    borderWidth: 2,
    borderColor: '#4a00e0',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#8e2de2',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 10,
  },
  barraSuperior: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  punto: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4a00e0',
  },
  textoLucy: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#00d4ff',
    textAlign: 'center',
    letterSpacing: 8,
    textShadowColor: '#8e2de2',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 14,
    color: '#b066ff',
    textAlign: 'center',
    marginBottom: 25,
  },
  linea: {
    fontSize: 14,
    color: '#9d8cfc',
    marginVertical: 4,
    fontFamily: 'monospace',
  },
});

