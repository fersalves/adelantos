import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import MoneyCard from '../components/MoneyCard';
import IconButton from '../components/IconButton';
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon';
import BellIcon from '../components/icons/BellIcon';
import QuestionIcon from '../components/icons/QuestionIcon';

export default function OfertasScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <IconButton onPress={() => console.log('Back pressed')}>
            <ChevronLeftIcon />
          </IconButton>
        </View>
        
        <View style={styles.headerRight}>
          <IconButton onPress={() => console.log('Bell pressed')}>
            <BellIcon />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </IconButton>
          <IconButton onPress={() => console.log('Question pressed')}>
            <QuestionIcon />
          </IconButton>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.greeting}>Hola, Santi</Text>
        
        <MoneyCard
          title="Receba agora"
          amount="9.800"
          currency="$"
          onPress={() => console.log('Money card pressed')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#F23D4F',
    borderRadius: 40,
    width: 13,
    height: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '600',
    lineHeight: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  greeting: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.9)',
    marginBottom: 16,
    lineHeight: 20,
  },
});

