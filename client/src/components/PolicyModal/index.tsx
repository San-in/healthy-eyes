import {
  Linking,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {JSX, SetStateAction} from 'react';
import {TEXT, TEXT_COLOR, TITLE} from '../../styles/text';
import {sharedStyles} from '../../styles/shared';
import {BORDER_RADIUS_BASIC} from '../../styles/vars';
import {BACKGROUND_COLOR} from '../../styles/backgrounds';
import {CustomButton} from '../ui/CustomButton';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';
import {COLORS} from '../../styles/colors';

export type PolicyModalProps = {
  isPolicyModalHide: boolean;
  setIsPolicyModalHide: React.Dispatch<SetStateAction<boolean>>;
};
export const PolicyModal = ({
  isPolicyModalHide,
  setIsPolicyModalHide,
}: PolicyModalProps): JSX.Element => {
  const onEmail = async () => {
    try {
      const email = 'privacy@h-eyes.com';
      await Linking.openURL(`mailto:${email}`);
    } catch (error) {
      console.log('Error opening email:', error);
    }
  };

  const onPhone = async () => {
    try {
      const phone = '0-800-800-900';
      await Linking.openURL(`tel:${phone}`);
    } catch (error) {
      console.log('Error opening phone:', error);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!isPolicyModalHide}
      onRequestClose={() => {
        setIsPolicyModalHide(prevState => !prevState);
      }}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 80,
          paddingBottom: 50,
          alignItems: 'center',
        }}>
        <View style={styles.modalView}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{borderRadius: BORDER_RADIUS_BASIC}}>
            <Text
              style={[
                TITLE.h1,
                sharedStyles.textAlignCenter,
                TEXT_COLOR.white,
                styles.title,
              ]}>
              Privacy Policy, Terms & Condition
            </Text>
            <Text
              style={[TEXT.large, TEXT_COLOR.white, styles.contentSubtitle]}>
              1. **General Provisions**
            </Text>
            <Text style={[styles.contentText, TEXT.normal, TEXT_COLOR.white]}>
              H-Eyes highly values your privacy. This privacy policy explains
              how we collect, use, and protect the information you provide to
              us. We recommend that you carefully read and understand this
              policy before using our services.
            </Text>
            <Text
              style={[TEXT.large, TEXT_COLOR.white, styles.contentSubtitle]}>
              2. **Information Collection**
            </Text>
            <Text style={[styles.contentText, TEXT.normal, TEXT_COLOR.white]}>
              We may collect various types of information to ensure and improve
              our services. This information includes personal data such as
              name, email address, phone number, and other data that you provide
              to us.
            </Text>
            <Text
              style={[TEXT.large, TEXT_COLOR.white, styles.contentSubtitle]}>
              3. **Use of Information**
            </Text>
            <Text style={[styles.contentText, TEXT.normal, TEXT_COLOR.white]}>
              We use the collected information to provide, enhance, study, and
              expand our services. Our use of this information is governed by
              this privacy policy, and we take steps to ensure it is handled
              securely. If you have any questions or concerns about our privacy
              policy, please contact us:
            </Text>
            <Text
              style={[TEXT.large, TEXT_COLOR.white, styles.contentSubtitle]}>
              3. **Use of Information**
            </Text>
            <Text style={[styles.contentText, TEXT.normal, TEXT_COLOR.white]}>
              We use the collected information to provide, enhance, study, and
              expand our services. Our use of this information is governed by
              this privacy policy, and we take steps to ensure it is handled
              securely. If you have any questions or concerns about our privacy
              policy, please contact us:
            </Text>
            <Text
              style={[TEXT.large, TEXT_COLOR.white, styles.contentSubtitle]}>
              3. **Use of Information**
            </Text>
            <Text style={[styles.contentText, TEXT.normal, TEXT_COLOR.white]}>
              We use the collected information to provide, enhance, study, and
              expand our services. Our use of this information is governed by
              this privacy policy, and we take steps to ensure it is handled
              securely. If you have any questions or concerns about our privacy
              policy, please contact us:
            </Text>
            <Text
              style={[TEXT.large, TEXT_COLOR.white, styles.contentSubtitle]}>
              3. **Use of Information**
            </Text>
            <Text style={[styles.contentText, TEXT.normal, TEXT_COLOR.white]}>
              We use the collected information to provide, enhance, study, and
              expand our services. Our use of this information is governed by
              this privacy policy, and we take steps to ensure it is handled
              securely. If you have any questions or concerns about our privacy
              policy, please contact us:
            </Text>
            <Pressable onPress={onEmail}>
              <Text
                style={[
                  TEXT.normal,
                  TEXT_COLOR.accent,
                  styles.contentText,
                  styles.contentSubtitle,
                ]}>
                privacy@h-eyes.com
              </Text>
            </Pressable>
            <Pressable onPress={onPhone}>
              <Text
                style={[
                  TEXT.normal,
                  TEXT_COLOR.accent,
                  styles.contentText,
                  styles.contentSubtitle,
                ]}>
                0-800-800-900
              </Text>
            </Pressable>
            <View style={{alignItems: 'flex-end'}}>
              <CustomButton
                text={'Back'}
                onClick={() => setIsPolicyModalHide(true)}
                size={'M'}
                afterIcon={<ArrowRightIcon stroke={COLORS.black10} />}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalView: {
    paddingHorizontal: 25,
    paddingVertical: 40,
    backgroundColor: BACKGROUND_COLOR.secondaryLight,
    borderRadius: BORDER_RADIUS_BASIC,
  },
  title: {marginBottom: 20},
  contentText: {
    marginBottom: 10,
  },

  contentSubtitle: {
    marginLeft: 4,
    marginBottom: 4,
  },
});
