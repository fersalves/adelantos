import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface MoneyCardProps {
  title: string;
  amount: string;
  currency: string;
  onPress: () => void;
}

export default function MoneyCard({ title, amount, currency, onPress }: MoneyCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        
        <View style={styles.amountContainer}>
          <Text style={styles.currency}>{currency}</Text>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
      
      <View style={styles.iconButton}>
        <ChevronDownIcon />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.9)',
    lineHeight: 28,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  currency: {
    fontSize: 12,
    fontWeight: '600',
    color: '#252537',
    lineHeight: 16,
  },
  amount: {
    fontSize: 32,
    fontWeight: '600',
    color: '#252537',
    lineHeight: 40,
  },
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

