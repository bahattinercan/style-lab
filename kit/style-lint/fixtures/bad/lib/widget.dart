import 'package:flutter/material.dart';

class BadPanel extends StatelessWidget {
  const BadPanel({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF123456),
        borderRadius: BorderRadius.circular(7),
      ),
      child: const AnimatedOpacity(
        duration: Duration(milliseconds: 123),
        opacity: 1,
        child: Text('panel'),
      ),
    );
  }
}
